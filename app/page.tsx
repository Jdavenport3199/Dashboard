"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [sideNav, setSideNave] = useState<boolean>(false);
  const toggleSideNave = () => {
    setSideNave(!sideNav);
  };

  const [contact, setContact] = useState<boolean>(false);
  const toggleContact = () => {
    setContact(false);
    setClient(true);
  };

  const [client, setClient] = useState<boolean>(true);
  const toggleClient = () => {
    setContact(true);
    setClient(false);
  };

  return (
    <main>
      <div
        style={{
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.4rem",
          borderBottom: "1px solid #ddd",
          background: "white",
          zIndex: "2",
        }}
      >
        <div style={{ display: "flex", gap: "0.4rem", alignItems: "baseline" }}>
          <h1>Global Enterprises</h1>
          <h2>/&ensp;Dashboard</h2>
        </div>
        <Image
          src={"/profile.png"}
          width={"35"}
          height={"35"}
          alt={""}
          style={{ borderRadius: "100px" }}
        ></Image>
      </div>
      <div className="container">
        <div className="page-holder">
          <div className="page-btn-holder">
            <div className="page-btns">
              <button
                style={{
                  fontWeight: 500,
                  fontSize: "16px",
                  padding: "1.1rem 1rem 1.1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  borderRadius: "100px",
                }}
              >
                <i className="fa-solid fa-list-ul"></i>
              </button>
              <button
                style={{
                  fontWeight: 500,
                  fontSize: "16px",
                  padding: "1.1rem 1rem 1.1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  borderRadius: "100px",
                }}
              >
                <i className="fa-regular fa-folder-open"></i>
              </button>
              <button
                style={{
                  fontWeight: 500,
                  fontSize: "16px",
                  padding: "1.1rem 1rem 1.1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  borderRadius: "100px",
                  background: "#2667ff20",
                }}
              >
                <i className="fa-solid fa-users"></i>
              </button>

              <button
                style={{
                  fontWeight: 500,
                  fontSize: "16px",
                  padding: "1.1rem 1rem 1.1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  borderRadius: "100px",
                }}
              >
                <i className="fa-solid fa-chart-line"></i>
              </button>
            </div>

            <div>
              <button
                style={{
                  fontWeight: 500,
                  fontSize: "16px",
                  padding: "1.1rem 1rem 1.1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  borderRadius: "100px",
                }}
              >
                <i className="fa-solid fa-gears"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          className="nav-holder"
          style={{
            minWidth: sideNav ? "0%" : "12rem",
            borderRight: sideNav ? "0px" : "1px solid #ddd",
          }}
        >
          <div
            className="nav"
            style={{
              display: sideNav ? "none" : "flex",
            }}
          >
            <button
              style={{
                fontWeight: 500,
                fontSize: "14px",
                padding: "0.6rem 1.2rem 0.6rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                borderRadius: "100px",
                background: contact ? "none" : "#2667ff20",
              }}
              onClick={toggleContact}
            >
              <span
                style={{
                  height: "8px",
                  width: "8px",
                  backgroundColor: "#2667ff",
                  borderRadius: "100px",
                  display: contact ? "none" : "inline-block",
                }}
              ></span>
              Contacts
            </button>
            <button
              style={{
                fontWeight: 500,
                fontSize: "14x",
                padding: "0.6rem 1.2rem 0.6rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                borderRadius: "100px",
                background: client ? "none" : "#2667ff20",
              }}
              onClick={toggleClient}
            >
              <span
                style={{
                  height: "8px",
                  width: "8px",
                  backgroundColor: "#2667ff",
                  borderRadius: "100px",
                  display: client ? "none" : "inline-block",
                }}
              ></span>
              Clients
            </button>
          </div>
        </div>

        <div
          className="test"
          style={{
            display: contact ? "none" : " ",
            width: "100%",
            overflowX: "hidden",
            height: "100vh",
          }}
        >
          <div
            style={{
              background: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem 1rem 1rem",
              width: "100%",
              borderBottom: "1px solid #ddd",
              gap: "0.4rem",
              flexWrap: "wrap",
              position: "sticky",
              top: "0px",
              zIndex: 4,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                flexWrap: "wrap",
              }}
            >
              <button style={{ padding: "0.4rem" }} onClick={toggleSideNave}>
                <i className="fa-solid fa-sliders fa-lg"></i>
              </button>
              <input type="text" placeholder="Search" />
              <div>
                <button
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    padding: "0.6rem 0.8rem 0.6rem",
                    borderRadius: "100px",
                  }}
                >
                  <i className="fa-solid fa-filter"></i>&nbsp;Filter
                </button>
                <button
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    padding: "0.6rem 0.8rem 0.6rem",
                    borderRadius: "100px",
                  }}
                >
                  <i className="fa-solid fa-arrow-down-short-wide"></i>
                  &nbsp;Sort
                </button>
                <button
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    padding: "0.6rem 0.8rem 0.6rem",
                    borderRadius: "100px",
                  }}
                >
                  <i className="fa-solid fa-user-group"></i>&nbsp;Group
                </button>
                <button
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    padding: "0.6rem 0.8rem 0.6rem",
                    borderRadius: "100px",
                  }}
                >
                  <i className="fa-solid fa-timeline"></i>&nbsp;Timeline
                </button>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.8rem" }}>
              <button
                style={{
                  border: "1px solid #ddd",
                  padding: "0.6rem 1rem 0.6rem",
                  borderRadius: "100px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                <i className="fa-solid fa-highlighter"></i>&nbsp;Edit
              </button>
              <button
                style={{
                  border: "1px solid #2667ff",
                  background: "#2667ff",
                  color: "white",
                  padding: "0.6rem 1.2rem 0.6rem",
                  borderRadius: "100px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                <i className="fa-solid fa-plus"></i>&nbsp;Create
              </button>
            </div>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ position: "relative" }}>
              <thead>
                <tr style={{ border: "0px" }}>
                  <th></th>
                  <th>Contact</th>
                  <th>Company</th>
                  <th>Priority</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "0",
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      John Smith
                    </div>
                  </td>
                  <td>ABC Corporation</td>
                  <td style={{ color: "#9A031E" }}>
                    <span
                      style={{
                        background: "#9A031E40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      High
                    </span>
                  </td>
                  <td>123-456-7890</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    john.smith@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Alice Johnson
                    </div>
                  </td>
                  <td>XYZ Industries</td>
                  <td style={{ color: "#DC965A" }}>
                    <span
                      style={{
                        background: "#DC965A40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Medium
                    </span>
                  </td>
                  <td>987-654-3210</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    alice.johnson@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Michael Williams
                    </div>
                  </td>
                  <td>Acme Co</td>
                  <td style={{ color: "#9A031E" }}>
                    <span
                      style={{
                        background: "#9A031E40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      High
                    </span>
                  </td>
                  <td>555-123-4567</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    michael.williams@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Sarah Brown
                    </div>
                  </td>
                  <td>Global Solutions</td>
                  <td style={{ color: "#2667ff" }}>
                    <span
                      style={{
                        background: "#2667ff40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Low
                    </span>
                  </td>
                  <td>111-222-3333</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    sarah.brown@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "0",
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      John Smith
                    </div>
                  </td>
                  <td>ABC Corporation</td>
                  <td style={{ color: "#9A031E" }}>
                    <span
                      style={{
                        background: "#9A031E40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      High
                    </span>
                  </td>
                  <td>123-456-7890</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    john.smith@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Alice Johnson
                    </div>
                  </td>
                  <td>XYZ Industries</td>
                  <td style={{ color: "#DC965A" }}>
                    <span
                      style={{
                        background: "#DC965A40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Medium
                    </span>
                  </td>
                  <td>987-654-3210</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    alice.johnson@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Michael Williams
                    </div>
                  </td>
                  <td>Acme Co</td>
                  <td style={{ color: "#9A031E" }}>
                    <span
                      style={{
                        background: "#9A031E40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      High
                    </span>
                  </td>
                  <td>555-123-4567</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    michael.williams@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Sarah Brown
                    </div>
                  </td>
                  <td>Global Solutions</td>
                  <td style={{ color: "#2667ff" }}>
                    <span
                      style={{
                        background: "#2667ff40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Low
                    </span>
                  </td>
                  <td>111-222-3333</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    sarah.brown@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "0",
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      John Smith
                    </div>
                  </td>
                  <td>ABC Corporation</td>
                  <td style={{ color: "#9A031E" }}>
                    <span
                      style={{
                        background: "#9A031E40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      High
                    </span>
                  </td>
                  <td>123-456-7890</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    john.smith@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Alice Johnson
                    </div>
                  </td>
                  <td>XYZ Industries</td>
                  <td style={{ color: "#DC965A" }}>
                    <span
                      style={{
                        background: "#DC965A40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Medium
                    </span>
                  </td>
                  <td>987-654-3210</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    alice.johnson@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Michael Williams
                    </div>
                  </td>
                  <td>Acme Co</td>
                  <td style={{ color: "#9A031E" }}>
                    <span
                      style={{
                        background: "#9A031E40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      High
                    </span>
                  </td>
                  <td>555-123-4567</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    michael.williams@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Sarah Brown
                    </div>
                  </td>
                  <td>Global Solutions</td>
                  <td style={{ color: "#2667ff" }}>
                    <span
                      style={{
                        background: "#2667ff40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Low
                    </span>
                  </td>
                  <td>111-222-3333</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    sarah.brown@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "0",
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      John Smith
                    </div>
                  </td>
                  <td>ABC Corporation</td>
                  <td style={{ color: "#9A031E" }}>
                    <span
                      style={{
                        background: "#9A031E40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      High
                    </span>
                  </td>
                  <td>123-456-7890</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    john.smith@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Alice Johnson
                    </div>
                  </td>
                  <td>XYZ Industries</td>
                  <td style={{ color: "#DC965A" }}>
                    <span
                      style={{
                        background: "#DC965A40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Medium
                    </span>
                  </td>
                  <td>987-654-3210</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    alice.johnson@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Michael Williams
                    </div>
                  </td>
                  <td>Acme Co</td>
                  <td style={{ color: "#9A031E" }}>
                    <span
                      style={{
                        background: "#9A031E40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      High
                    </span>
                  </td>
                  <td>555-123-4567</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    michael.williams@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Sarah Brown
                    </div>
                  </td>
                  <td>Global Solutions</td>
                  <td style={{ color: "#2667ff" }}>
                    <span
                      style={{
                        background: "#2667ff40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Low
                    </span>
                  </td>
                  <td>111-222-3333</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    sarah.brown@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "0",
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      John Smith
                    </div>
                  </td>
                  <td>ABC Corporation</td>
                  <td style={{ color: "#9A031E" }}>
                    <span
                      style={{
                        background: "#9A031E40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      High
                    </span>
                  </td>
                  <td>123-456-7890</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    john.smith@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Alice Johnson
                    </div>
                  </td>
                  <td>XYZ Industries</td>
                  <td style={{ color: "#DC965A" }}>
                    <span
                      style={{
                        background: "#DC965A40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Medium
                    </span>
                  </td>
                  <td>987-654-3210</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    alice.johnson@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Michael Williams
                    </div>
                  </td>
                  <td>Acme Co</td>
                  <td style={{ color: "#9A031E" }}>
                    <span
                      style={{
                        background: "#9A031E40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      High
                    </span>
                  </td>
                  <td>555-123-4567</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    michael.williams@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Sarah Brown
                    </div>
                  </td>
                  <td>Global Solutions</td>
                  <td style={{ color: "#2667ff" }}>
                    <span
                      style={{
                        background: "#2667ff40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Low
                    </span>
                  </td>
                  <td>111-222-3333</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    sarah.brown@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "0",
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      John Smith
                    </div>
                  </td>
                  <td>ABC Corporation</td>
                  <td style={{ color: "#9A031E" }}>
                    <span
                      style={{
                        background: "#9A031E40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      High
                    </span>
                  </td>
                  <td>123-456-7890</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    john.smith@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Alice Johnson
                    </div>
                  </td>
                  <td>XYZ Industries</td>
                  <td style={{ color: "#DC965A" }}>
                    <span
                      style={{
                        background: "#DC965A40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Medium
                    </span>
                  </td>
                  <td>987-654-3210</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    alice.johnson@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Michael Williams
                    </div>
                  </td>
                  <td>Acme Co</td>
                  <td style={{ color: "#9A031E" }}>
                    <span
                      style={{
                        background: "#9A031E40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      High
                    </span>
                  </td>
                  <td>555-123-4567</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    michael.williams@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Sarah Brown
                    </div>
                  </td>
                  <td>Global Solutions</td>
                  <td style={{ color: "#2667ff" }}>
                    <span
                      style={{
                        background: "#2667ff40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Low
                    </span>
                  </td>
                  <td>111-222-3333</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    sarah.brown@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Alice Johnson
                    </div>
                  </td>
                  <td>XYZ Industries</td>
                  <td style={{ color: "#DC965A" }}>
                    <span
                      style={{
                        background: "#DC965A40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Medium
                    </span>
                  </td>
                  <td>987-654-3210</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    alice.johnson@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Michael Williams
                    </div>
                  </td>
                  <td>Acme Co</td>
                  <td style={{ color: "#9A031E" }}>
                    <span
                      style={{
                        background: "#9A031E40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      High
                    </span>
                  </td>
                  <td>555-123-4567</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    michael.williams@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Image
                        src={"/profile.png"}
                        width={"25"}
                        height={"25"}
                        alt={""}
                        style={{ borderRadius: "100px" }}
                      ></Image>
                      Sarah Brown
                    </div>
                  </td>
                  <td>Global Solutions</td>
                  <td style={{ color: "#2667ff" }}>
                    <span
                      style={{
                        background: "#2667ff40",
                        borderRadius: "20px",
                        padding: "0.4rem 1rem 0.4rem",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Low
                    </span>
                  </td>
                  <td>111-222-3333</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.4rem",
                    }}
                  >
                    sarah.brown@example.com{" "}
                    <button
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "0.4rem 0.5rem 0.4rem",
                        borderRadius: "100px",
                      }}
                    >
                      <i className="fa-solid fa-gears"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
