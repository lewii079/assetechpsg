import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  phone: z.string().regex(/^\+?[0-9]{9,}$/, "Please provide a valid phone number"),
  email: z.string().email("Please provide a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Owner delivery destinations
export const OWNER_EMAIL = "nderitulewis2@gmail.com";
const WEB3FORMS_ACCESS_KEY = "744b601e-8eb3-4e79-90a9-11909270bc17";
// WhatsApp number in international format, digits only (no + or spaces)
export const OWNER_WHATSAPP = "254757553243";

function buildMessageText(data: ContactFormData): string {
  return (
    `New enquiry from Assetech website\n\n` +
    `Name: ${data.name}\n` +
    (data.company ? `Company: ${data.company}\n` : ``) +
    `Phone: ${data.phone}\n` +
    `Email: ${data.email}\n\n` +
    `Message:\n${data.message}`
  );
}

export function buildWhatsappUrl(data: ContactFormData): string {
  const text = encodeURIComponent(buildMessageText(data));
  return `https://wa.me/${OWNER_WHATSAPP}?text=${text}`;
}

/**
 * Submits the contact form:
 *  - Emails the owner via FormSubmit (https://formsubmit.co) — no backend required.
 *  - Caller is expected to also open the WhatsApp click-to-chat URL from
 *    buildWhatsappUrl() in a user-initiated handler so the browser allows it.
 */
export async function submitContactForm(
  data: ContactFormData,
): Promise<{ success: boolean; message: string }> {
  try {
    const validData = contactFormSchema.parse(data);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New enquiry from ${validData.name} — Assetech website`,
        from_name: "Assetech Website",
        name: validData.name,
        company: validData.company || "—",
        email: validData.email,
        phone: validData.phone,
        message: validData.message,
      }),
    });

    const result = (await response.json().catch(() => ({}))) as { success?: boolean; message?: string };
    if (!response.ok || result.success === false) {
      throw new Error(result.message || `Email service returned ${response.status}`);
    }

    return {
      success: true,
      message: "Message sent! Opening WhatsApp so you can send it there too.",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: error.errors[0].message };
    }
    console.error("Contact form submission failed:", error);
    return {
      success: false,
      message: "Couldn't send the email. Please try again or WhatsApp us directly.",
    };
  }
}
