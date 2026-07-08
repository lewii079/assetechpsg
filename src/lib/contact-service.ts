import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^\+?[0-9]{9,}$/, "Please provide a valid phone number"),
  email: z.string().email("Please provide a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Submit contact form to backend or email service
 * Replace this with your actual backend endpoint or email service (e.g., SendGrid, Resend)
 */
export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // Validate data
    const validData = contactFormSchema.parse(data);

    // TODO: Replace with actual backend endpoint
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(validData),
    // });
    // const result = await response.json();
    // if (!response.ok) throw new Error(result.message || 'Failed to send message');
    // return { success: true, message: 'Message sent successfully!' };

    // Temporary: log to console for development
    console.log("Contact form submission:", validData);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true, message: "Message received! We'll get back to you within 24 hours." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstError = error.errors[0];
      return { success: false, message: firstError.message };
    }
    return { success: false, message: "Failed to send message. Please try again." };
  }
}
