import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadDiagnosis() {
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    if (!image) {
      alert("Please upload an image first.");
      return;
    }

    const formData = new FormData();

    formData.append("file", image);

    try {
      const response = await fetch("http://127.0.0.1:8000/diagnose", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      navigate("/result", {
        state: data,
      });
    } catch (error) {
      console.error(error);

      alert("Something went wrong.");
    }
  }

  return (
    <main className="page">
      <h1>Upload Crop Image</h1>

      <form className="card" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={(event) => setImage(event.target.files[0])}
        />

        <button className="button" type="submit">
          Analyze Image
        </button>
      </form>
    </main>
  );
}

export default UploadDiagnosis;
