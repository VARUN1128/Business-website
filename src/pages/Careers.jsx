import React from "react";
import { useNavigate } from "react-router-dom";

// Promotion level images
import associateImg from "../assets/1.jpg";
import hrdImg from "../assets/2.jpg";
import eclImg from "../assets/3.jpg";
import assistantmanagerImg from "../assets/4.jpg";
import sbuheadImg from "../assets/5.jpg";

// Certificate images
import cert1Img from "../assets/c1.jpg";
import cert2Img from "../assets/c3.jpg";
import cert3Img from "../assets/c4.jpg";

const promotionLevels = [
  {
    name: "BUSINESS ASSOCIATE",
    img: associateImg,
  },
  {
    name: "HRD TRAINER",
    img: hrdImg,
  },
  {
    name: "EXECUTIVE CREW LEADER",
    img: eclImg,
  },
  {
    name: "ASSISTANT MANAGER",
    img: assistantmanagerImg,
  },
  {
    name: "SBU HEAD",
    img: sbuheadImg,
  },
];

// Updated certificates array
const certificates = [cert1Img, cert2Img, cert3Img];

export default function Career() {
  const navigate = useNavigate();

  function handleGallery() {
    navigate("/gallery");
  }

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 32 }}>
      {/* ... (rest of the component remains the same) ... */}
      <h1
        style={{
          textAlign: "center",
          fontSize: 34,
          fontWeight: 700,
          color: "#2464e5",
          marginBottom: 13,
        }}
      >
        Why Join Our Team
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: 18,
          color: "#333",
          marginBottom: 33,
          maxWidth: 700,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Join us to gain real-world experience, build leadership skills, and grow
        into an entrepreneur. At Stars Management, we don’t just create
        employees—we create future business owners. Get instant exposure to
        ownership responsibilities and start your journey as a business-minded
        professional from day one.
      </p>

      {/* Career Section */}
      <h2
        style={{
          textAlign: "center",
          color: "#2655ec",
          fontSize: 25,
          fontWeight: 700,
          marginBottom: 30,
        }}
      >
        Career
      </h2>
      <div
        style={{
          display: "flex",
          gap: 32,
          justifyContent: "center",
          alignItems: "stretch",
          flexWrap: "wrap",
        }}
      >
        {/* Left Card */}
        <div
          style={{
            flex: 1,
            minWidth: 310,
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 4px 24px rgba(0,0,0,0.09)",
            padding: 24,
            fontSize: 15.5,
            lineHeight: 1.7,
            color: "#555",
            maxWidth: 450,
          }}
        >
          <div style={{ marginBottom: "1.5rem" }}>
            <h4
              style={{
                fontWeight: "bold",
                color: "#333",
                marginBottom: "0.5rem",
              }}
            >
              🌟 Opportunity
            </h4>
            <p>
              At Stars Management, we create real opportunities for young
              graduates and postgraduates to step into leadership roles. With
              direct exposure to business and client interaction, every
              individual gets the chance to lead, learn, and grow.
            </p>
          </div>
          <div style={{ marginBottom: "1.5rem" }}>
            <h4
              style={{
                fontWeight: "bold",
                color: "#333",
                marginBottom: "0.5rem",
              }}
            >
              💼 Experience
            </h4>
            <p>
              Gain real-world experience from day one. From sales and marketing
              to presentations and client handling — we prepare you for success
              with hands-on learning in a fast-paced environment.
            </p>
          </div>
          <div style={{ marginBottom: "1.5rem" }}>
            <h4
              style={{
                fontWeight: "bold",
                color: "#333",
                marginBottom: "0.5rem",
              }}
            >
              💰 Money
            </h4>
            <p>
              Your income has no limits. We follow a performance-based system
              where your effort directly impacts your earnings. The more you
              give, the more you grow.
            </p>
          </div>
          <div>
            <h4
              style={{
                fontWeight: "bold",
                color: "#333",
                marginBottom: "0.5rem",
              }}
            >
              📈 Growth
            </h4>
            <p>
              With a clear, fast-track promotion structure, we transform fresh
              talent into leaders and future business owners. At Stars
              Management, your growth is in your hands.
            </p>
          </div>
        </div>

        {/* Right Card: Promotions */}
        <div
          style={{
            flex: 1,
            minWidth: 310,
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 4px 24px rgba(0,0,0,0.09)",
            padding: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 350,
          }}
        >
          <div
            style={{
              color: "#ff9800",
              fontWeight: 700,
              marginBottom: 16,
              fontSize: 17,
            }}
          >
            *Five Levels of Promotions*
          </div>
          <div style={{ width: "100%" }}>
            {promotionLevels.map((level) => (
              <div
                key={level.name}
                style={{
                  margin: "10px 0",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                <a
                  href={level.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#222",
                    textDecoration: "none",
                    border: "1.5px solid #e5e7eb",
                    background: "#f6f6fa",
                    borderRadius: 7,
                    display: "block",
                    padding: "8px 0",
                    transition: "box-shadow 0.16s",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 2px 14px rgba(70,70,150,0.10)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 2px 8px rgba(0,0,0,0.04)")
                  }
                >
                  {level.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons area */}
      <div
        style={{
          textAlign: "center",
          marginTop: 38,
          display: "flex",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfcgoXfMxGrtTfnfj3xrE7umFMqA2p4MtXvaM4-4_Lsze7r3w/viewform"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "14px 38px",
            background: "linear-gradient(90deg,#087bea,#01c7c2)",
            color: "#fff",
            fontWeight: 700,
            borderRadius: 6,
            border: "none",
            textDecoration: "none",
            fontSize: 18,
            boxShadow: "0 4px 16px rgba(0,90,190,0.10)",
          }}
        >
          Apply
        </a>
        <button
          onClick={handleGallery}
          style={{
            display: "inline-block",
            padding: "14px 38px",
            background: "linear-gradient(90deg,#ffb900,#ffd95e)",
            color: "#222",
            fontWeight: 700,
            borderRadius: 6,
            border: "none",
            fontSize: 18,
            boxShadow: "0 4px 16px rgba(250,190,0,0.10)",
            cursor: "pointer",
          }}
        >
          Gallery
        </button>
      </div>

      {/* --- UPDATED Certificates section --- */}
      <div style={{ marginTop: 60 }}>
        {/* Headline - UPDATED */}
        <div
          style={{
            textAlign: "center", // Changed from "left" to "center"
            fontWeight: 700,
            fontSize: 22,
            color: "#1c305e",
            marginBottom: 20, // Increased bottom margin for better spacing
            letterSpacing: 0.1,
          }}
        >
          Certifications:
        </div>
        {/* Image Row - UPDATED */}
        <div
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center", // Changed from "start" to "center"
            alignItems: "center",
            overflowX: "auto", // Keeps horizontal scroll if needed on small screens
            padding: "0 8px",
          }}
        >
          {certificates.map((img, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: 10,
                boxShadow: "0 2px 12px rgba(40,40,80,0.10)",
                overflow: "hidden",
                width: 250,
                minWidth: 128,
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={img}
                alt={`Certificate ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
