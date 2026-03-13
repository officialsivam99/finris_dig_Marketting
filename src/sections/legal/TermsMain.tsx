import React from "react";

const cardStyle: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: "16px",
  padding: "28px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
  marginBottom: "20px",
};

const TermsMain: React.FC = () => {
  return (
    <section className="services-details" style={{ padding: "120px 0 90px" }}>
      <div className="container">
        <div style={cardStyle}>
          <h3 style={{ marginBottom: "10px" }}>Terms and Conditions</h3>
          <p style={{ margin: 0 }}>
            Effective Date: February 24, 2026
          </p>
          <p style={{ marginTop: "14px", marginBottom: 0 }}>
            These Terms and Conditions govern access to and use of the Finris website, content,
            and digital service information. Please read these terms carefully before using this
            site.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>1. Acceptance and Scope</h4>
          <p>
            By accessing and using this website, you agree to these Terms and Conditions and all
            applicable laws and regulations. If you do not agree with any part of these terms, you
            should discontinue use of the website immediately.
          </p>
          <p style={{ marginBottom: 0 }}>
            These terms apply to all visitors, users, prospects, and clients who access this
            website or submit information through our contact forms and other interactive elements.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>2. Website Use and User Conduct</h4>
          <p>
            You agree to use this website only for lawful purposes. You must not attempt to gain
            unauthorized access to any part of the website, interfere with site functionality, or
            use the platform in a way that could harm Finris, other users, or third parties.
          </p>
          <p style={{ marginBottom: 0 }}>
            You also agree not to upload malicious code, misuse forms for spam or fraudulent
            activity, or misrepresent identity, affiliation, or intent while communicating with us.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>3. Intellectual Property Rights</h4>
          <p>
            All website content, including text, design, graphics, and brand assets, is owned by
            or licensed to Finris and protected by applicable intellectual property laws.
          </p>
          <p style={{ marginBottom: 0 }}>
            You may view website content for personal or internal business evaluation purposes only.
            Reproduction, redistribution, adaptation, or commercial use of site content without
            prior written permission is prohibited.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>4. Service Information and No Guaranteed Outcome</h4>
          <p>
            We aim to keep service information accurate, current, and useful. However, website
            content is provided for general informational purposes and may change over time.
          </p>
          <p style={{ marginBottom: 0 }}>
            Strategy recommendations, campaign examples, and growth references are contextual and
            do not constitute a guarantee of specific business, traffic, or revenue outcomes.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>5. Third-Party Tools and External Links</h4>
          <p>
            This website may reference or link to third-party websites, platforms, or software
            tools. Such references are provided for convenience and do not imply endorsement.
          </p>
          <p style={{ marginBottom: 0 }}>
            Finris is not responsible for third-party content, service continuity, privacy
            practices, security controls, or business terms outside our direct control.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>6. Disclaimer of Warranties</h4>
          <p>
            This website and its content are provided on an "as is" and "as available" basis.
            Finris does not make warranties of uninterrupted availability, error-free performance,
            or complete accuracy of all site materials at all times.
          </p>
          <p style={{ marginBottom: 0 }}>
            To the maximum extent permitted by law, all implied warranties, including fitness for a
            particular purpose and non-infringement, are disclaimed.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>7. Limitation of Liability</h4>
          <p>
            Finris is not liable for indirect, incidental, or consequential damages related to your
            use of this website, including business interruption, data loss, or lost opportunity.
          </p>
          <p style={{ marginBottom: 0 }}>
            Your use of this website is at your own risk. Where liability cannot be excluded under
            law, it will be limited to the minimum extent legally permitted.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>8. Indemnification</h4>
          <p>
            You agree to indemnify and hold harmless Finris, its team members, and affiliates from
            claims, losses, liabilities, and expenses arising from your misuse of the website or
            violation of these terms.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>9. Suspension and Termination</h4>
          <p>
            We reserve the right to restrict, suspend, or terminate access to this website at any
            time if we reasonably believe usage violates these terms or poses operational or
            security risks.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>10. Governing Law</h4>
          <p>
            These Terms and Conditions are governed by applicable laws and interpreted in accordance
            with governing legal requirements in the relevant jurisdiction for website operation and
            contractual interpretation.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>11. Updates to These Terms</h4>
          <p>
            We may revise these Terms and Conditions periodically to reflect business, legal, or
            technical changes. Updated versions become effective once published on this page.
          </p>
          <p style={{ marginBottom: 0 }}>
            Continued use of the website after updates are posted constitutes acceptance of the
            revised terms.
          </p>
        </div>

        <div style={cardStyle}>
          <h4>12. Contact Information</h4>
          <p style={{ marginBottom: 0 }}>
            For any questions regarding these Terms and Conditions, contact us at{" "}
            <a href="mailto:info@finris.online">info@finris.online</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsMain;
