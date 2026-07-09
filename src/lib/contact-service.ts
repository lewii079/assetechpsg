import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^\+?[0-9]{9,}$/, "Please provide a valid phone number"),
  email: z.string().email("Please provide a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Owner delivery destinations
export const OWNER_EMAIL = "nderitulewis2@gmail.com";
// WhatsApp number in international format, digits only (no + or spaces)
export const OWNER_WHATSAPP = "254757553243";

function buildMessageText(data: ContactFormData): string {
  return (
    `New enquiry from Assetech website\n\n` +
    `Name: ${data.name}\n` +
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

    const payload = new FormData();
    payload.append("name", validData.name);
    payload.append("email", validData.email);
    payload.append("phone", validData.phone);
    payload.append("message", validData.message);
    payload.append("_subject", `New enquiry from ${validData.name} — Assetech website`);
    payload.append("_template", "table");
    payload.append("_captcha", "false");

    const response = await fetch(`https://formsubmit.co/ajax/${OWNER_EMAIL}`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: payload,
    });

    if (!response.ok) {
      throw new Error(`Email service returned ${response.status}`);
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
