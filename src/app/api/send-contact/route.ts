import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
    firstName: string;
    lastName?: string;
    email: string;
    phone?: string;
    message: string;
    [key: string]: unknown;
};

const resend = new Resend(process.env.RESEND_API_KEY || "");
const adminEmail = process.env.APP_EMAIL || "";
const appDomain = process.env.APP_DOMEN || "";

export async function POST(req: NextRequest) {
    try {
        const body = (await req.json()) as ContactPayload;
        const { firstName, lastName, email, phone, message } = body;

        if (!firstName || !email || !message) {
            return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
        }

        await resend.emails.send({
            from: `Sakura Language School <onboarding@resend.dev>`,
            to: adminEmail,
            subject: "Нова заявка з контактної форми",
            html: `
        <h2>Нова заявка з сайту <a href="${appDomain}" target="_blank">Sakura Language School</a></h2>
        <p><strong>Ім'я:</strong> ${firstName} ${lastName || ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone || "не вказано"}</p>
        <p><strong>Повідомлення:</strong><br/>${message}</p>
      `,
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        console.error("Email send error:", message);
        return NextResponse.json({ success: false, error: message }, { status: 500 });
    }
}