import PageLayout from "../components/PageLayout";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <PageLayout title="👤 User Profile">
      <div
        style={{
          background: "#1e1e1e",
          padding: "20px",
          borderRadius: "12px",
          maxWidth: "500px",
        }}
      >
        <h2>{user?.fullName}</h2>
        <p>Email: {user?.email}</p>
        <p>Age: {user?.age}</p>
        <p>Gender: {user?.gender}</p>
        <p>Height: {user?.height} cm</p>
        <p>Weight: {user?.weight} kg</p>
      </div>
    </PageLayout>
  );
}

export default Profile;