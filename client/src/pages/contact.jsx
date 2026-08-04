import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">

      <ContactHero />

      <section
        id="contact-form"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="grid gap-10 lg:grid-cols-2">

          <ContactForm />

          <ContactInfo />

        </div>
      </section>

    </main>
  );
}