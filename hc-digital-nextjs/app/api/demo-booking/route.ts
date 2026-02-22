import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const bookingSchema = z.object({
    fullName: z.string().min(2),
    phone: z.string().min(6),
    website: z.string().optional(),
    date: z.string().min(1),
    time: z.string().min(1),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const result = bookingSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: 'Données invalides', details: result.error.flatten() },
                { status: 400 }
            );
        }

        const { fullName, phone, website, date, time } = result.data;

        // Format the date for readability in the email
        const formattedDate = new Date(date).toLocaleDateString('fr-FR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });

        const { data, error } = await resend.emails.send({
            from: 'HC Digital <onboarding@resend.dev>',
            to: ['hamza.chohabi95100@gmail.com'],
            subject: `📅 Nouvelle réservation de démo — ${fullName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 12px;">
                    <h1 style="color: #1e293b; font-size: 22px; margin-bottom: 4px;">📅 Nouvelle réservation de démo gratuite</h1>
                    <p style="color: #64748b; margin-bottom: 24px;">Un visiteur a réservé un appel personnalisé via le site HC Digital.</p>

                    <table style="width: 100%; border-collapse: collapse;">
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                            <td style="padding: 12px 8px; color: #64748b; font-size: 14px; width: 40%;">👤 Nom &amp; Prénom</td>
                            <td style="padding: 12px 8px; color: #1e293b; font-weight: bold;">${fullName}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                            <td style="padding: 12px 8px; color: #64748b; font-size: 14px;">📞 Téléphone</td>
                            <td style="padding: 12px 8px; color: #1e293b; font-weight: bold;">${phone}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                            <td style="padding: 12px 8px; color: #64748b; font-size: 14px;">🌐 Site web actuel</td>
                            <td style="padding: 12px 8px; color: #1e293b;">${website ? `<a href="${website}" style="color: #6366f1;">${website}</a>` : '<em style="color: #94a3b8;">Non renseigné</em>'}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                            <td style="padding: 12px 8px; color: #64748b; font-size: 14px;">📅 Date souhaitée</td>
                            <td style="padding: 12px 8px; color: #1e293b; font-weight: bold;">${formattedDate}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 8px; color: #64748b; font-size: 14px;">🕐 Créneau horaire</td>
                            <td style="padding: 12px 8px; color: #1e293b; font-weight: bold;">${time}</td>
                        </tr>
                    </table>

                    <p style="margin-top: 24px; font-size: 13px; color: #94a3b8; text-align: center;">
                        Cet email a été généré automatiquement depuis le site HC Digital.
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend error:', JSON.stringify(error, null, 2));
            return NextResponse.json({ error: "Erreur lors de l'envoi", details: error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (err) {
        console.error('Server error:', err);
        return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
    }
}
