"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="medium"
      background="gradientBars"
      cardStyle="layered-gradient"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Osteria delle Coppelle"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reservations", id: "contact" },
            { name: "Contact", id: "footer" }
          ]}
          button={{
            text: "Book Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Osteria delle Coppelle"
          description="An authentic taste of Italy. Discover traditional Roman cuisine prepared with passion and the finest ingredients in an elegant historic setting."
          tag="Roman Tradition"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763848635344-tzh16let.jpg"
          imageAlt="Elegant Italian restaurant dining room"
          frameStyle="card"
          buttons={[
            { text: "Reserve Now", href: "contact" },
            { text: "View Menu", href: "menu" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Our Story"
          title="A Legacy of Authentic Italian Cuisine"
          description="Since 1983, Osteria delle Coppelle has been serving the heart of Rome with passion and tradition. Every dish tells a story of heritage, every ingredient speaks of authenticity. We believe in slow food, fresh flavors, and the art of bringing people together around the table."
          phoneOne={{ imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763848638519-wjadx7cy.jpg" }}
          phoneTwo={{ imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763848639235-zk6z7u4q.jpg" }}
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Featured Dishes"
          description="Taste our most beloved signature dishes prepared fresh daily"
          tag="Specialties"
          products={[
            {
              id: "1",
              name: "Cacio e Pepe",
              price: "16,00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763848636259-tavn3mm8.jpg",
              imageAlt: "Traditional Cacio e Pepe pasta"
            },
            {
              id: "2",
              name: "Risotto ai Funghi",
              price: "18,00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763848637011-tknf8ejq.jpg",
              imageAlt: "Creamy mushroom risotto"
            },
            {
              id: "3",
              name: "Branzino al Forno",
              price: "24,00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763848637712-yp5jqz1c.jpg",
              imageAlt: "Grilled sea bass with herbs"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          buttons={[
            { text: "Full Menu", href: "#" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Guests Say"
          description="Real experiences from people who love dining at Osteria delle Coppelle"
          tag="Reviews"
          testimonials={[
            {
              id: "1",
              name: "Marco Rossi",
              handle: "@marco_rome",
              testimonial: "The most authentic Roman cuisine I've ever tasted. The Cacio e Pepe is perfection. Simply incredible!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763848639964-n8msepue.jpg"
            },
            {
              id: "2",
              name: "Elena Bianchi",
              handle: "@elena_food",
              testimonial: "Every visit feels like coming home. The warmth, the food, the service - everything is exceptional.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763848640598-51mw1r95.jpg"
            },
            {
              id: "3",
              name: "Giuseppe Romano",
              handle: "@giuseppe_chef",
              testimonial: "As a chef myself, I deeply respect the dedication to authentic Italian traditions here. Bravo!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763848641250-324mgrip.jpg"
            },
            {
              id: "4",
              name: "Sophia Moretti",
              handle: "@sophia_travel",
              testimonial: "A true gem in Rome. Perfect for special occasions or just craving real Italian food. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763848641853-kswje8em.jpg"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Our Legacy"
          description="Trusted by food lovers across Rome and beyond"
          tag="By The Numbers"
          metrics={[
            {
              id: "1",
              value: "40+",
              description: "Years of Excellence"
            },
            {
              id: "2",
              value: "5000+",
              description: "Happy Diners Monthly"
            },
            {
              id: "3",
              value: "50+",
              description: "Signature Dishes"
            },
            {
              id: "4",
              value: "100%",
              description: "Local Ingredients"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Reserve Your Table"
          description="Join us for an unforgettable evening of authentic Italian cuisine"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "guests",
              type: "number",
              placeholder: "Number of Guests",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or dietary preferences",
            rows: 4,
            required: false
          }}
          buttonText="Book Reservation"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Osteria delle Coppelle"
          columns={[
            {
              items: [
                { label: "Via delle Coppelle, 39", href: "#" },
                { label: "00186 Rome, Italy", href: "#" },
                { label: "+39 06 6879 0535", href: "#" }
              ]
            },
            {
              items: [
                { label: "Menu", href: "menu" },
                { label: "About", href: "about" },
                { label: "Reservations", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Open Mon-Sun", href: "#" },
                { label: "12:00 PM - 11:30 PM", href: "#" },
                { label: "Closed Tuesdays", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}