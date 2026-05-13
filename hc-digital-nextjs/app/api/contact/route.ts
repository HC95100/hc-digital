
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    projectType: z.string().min(1),
    message: z.string().min(10),
    consent: z.boolean(),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const result = contactSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: 'Invalid input', details: result.error.flatten() },
                { status: 400 }
            );
        }

        const { firstName, lastName, email, phone, projectType, message } = result.data;

        const { data, error } = await resend.emails.send({
            from: 'HC Digital <contact@hc-digital-web.com>',
            to: ['contact@hc-digital-web.com'],
            replyTo: email,
            subject: `Nouvelle demande de devis : ${projectType}`,
            html: `
        <h1>Nouvelle demande de devis</h1>
        <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
        <p><strong>Type de projet :</strong> ${projectType}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error('Resend error details:', JSON.stringify(error, null, 2));
            return NextResponse.json({ error: 'Error sending email', details: error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
