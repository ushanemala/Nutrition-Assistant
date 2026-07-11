import Sidebar from "./sidebar";

function PageLayout({ title, children }) {
  return (
    <div
      style={{
        display: "flex",
        background: "#0f0f0f",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          marginLeft: "290px",
          width: "calc(100% - 290px)",
          padding: "40px",
          color: "white",
          boxSizing: "border-box",
        }}
      >
        <h1
  style={{
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "15px",
  }}
>
  {title}
</h1>

        <hr
          style={{
            border: "1px solid #333",
            marginBottom: "30px",
          }}
        />

        {children}
      </div>
    </div>
  );
}

export default PageLayout;