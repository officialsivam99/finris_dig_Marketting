import React from "react";

const cardStyle: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: "16px",
  padding: "28px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
  marginBottom: "20px",
};

const PrivacyPolicyMain: React.FC = () => {
  return (
    <section className="services-details" style={{ padding: "120px 0 90px" }}>
      <div className="container">
        <div style={cardStyle}>
          <h3 style={{ marginBottom: "10px" }}>Privacy Policy</h3>
          <p style={{ margin: 0 }}>
            Effective Date: February 24, 2026
          </p>
          <p style={{ marginTop: "14px", marginBottom: 0 }}>
            This Privacy Policy explains how Finris collects, uses, stores, protects, and shares
            personal information obtained through this website and related communication channels.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>1. Information We Collect</h4>
          <p>
            We may collect information that you voluntarily provide, including your name, business
            email address, company details, project requirements, and any message content submitted
            through contact or inquiry forms.
          </p>
          <p style={{ marginBottom: 0 }}>
            We may also collect technical and usage data such as browser type, device category,
            referral source, pages visited, session duration, and interaction patterns for website
            analytics and performance optimization.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>2. How We Use Information</h4>
          <p>
            We use personal information to respond to inquiries, evaluate project fit, deliver
            requested service information, improve website performance, and maintain communication
            related to your business request.
          </p>
          <p style={{ marginBottom: 0 }}>
            We may also use aggregated and non-identifiable analytics data for internal planning,
            process improvement, and service quality monitoring.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>3. Lawful Basis and Consent</h4>
          <p>
            Where required by law, we process personal data on valid legal grounds such as consent,
            contractual necessity, legitimate business interests, or legal obligations.
          </p>
          <p style={{ marginBottom: 0 }}>
            When consent is used as the legal basis, you may withdraw consent at any time by
            contacting us through our official email.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>4. Cookies and Analytics Technologies</h4>
          <p>
            We may use cookies, pixels, and analytics technologies to understand user behavior,
            measure engagement, and improve user experience across devices and sessions.
          </p>
          <p style={{ marginBottom: 0 }}>
            You can manage cookie settings through your browser controls. Disabling cookies may
            affect functionality and certain interactive features of this website.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>5. Data Sharing and Third-Party Processors</h4>
          <p>
            We may rely on trusted third-party tools for hosting, analytics, or communications.
            These providers process data only for legitimate operational purposes and under
            appropriate contractual safeguards where required.
          </p>
          <p style={{ marginBottom: 0 }}>
            We do not sell personal information. We may disclose data when legally required, to
            protect rights and security, or in connection with business restructuring where legally
            permitted.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>6. Data Retention</h4>
          <p>
            We retain personal information only as long as necessary for the purposes described in
            this policy, including legal, tax, contractual, and compliance requirements.
          </p>
          <p style={{ marginBottom: 0 }}>
            Once retention is no longer required, we delete, anonymize, or securely archive data in
            accordance with reasonable data governance practices.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>7. Data Security</h4>
          <p>
            Finris applies reasonable technical and organizational safeguards designed to protect
            data from unauthorized access, alteration, disclosure, misuse, or accidental loss.
          </p>
          <p style={{ marginBottom: 0 }}>
            No method of internet transmission or electronic storage is completely secure, but we
            continuously review and improve security controls to reduce risk.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>8. Your Privacy Rights</h4>
          <p>
            Depending on your jurisdiction, you may have rights to access, correct, update, delete,
            restrict processing, object to processing, or request portability of your personal data.
          </p>
          <p style={{ marginBottom: 0 }}>
            To exercise these rights, submit a request to{" "}
            <a href="mailto:info@finris.online">info@finris.online</a>. We may need to verify your
            identity before processing requests.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>9. International Data Transfers</h4>
          <p>
            If data is transferred across borders for operational purposes, we take reasonable steps
            to ensure appropriate safeguards and legal protections are in place.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>10. Children's Privacy</h4>
          <p>
            This website is intended for business and professional audiences. We do not knowingly
            collect personal information from children in violation of applicable laws.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>11. Policy Updates</h4>
          <p>
            We may update this Privacy Policy from time to time to reflect legal, operational, or
            service-related changes. Any updates will be posted on this page with a revised
            effective date.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>12. Contact</h4>
          <p style={{ marginBottom: 0 }}>
            For privacy-related questions, email{" "}
            <a href="mailto:info@finris.online">info@finris.online</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyMain;
