import { useRef, useState } from "react";
import "./App.css";

function App() {
	const [name, setName] = useState("Your FullName");
	const [title, setTitle] = useState("Your Title/Role");
	const [photo, setPhoto] = useState(null);
	const fileInputRef = useRef(null);
	const flyerRef = useRef(null);

	const handleFile = (file) => {
		if (!file || !file.type.startsWith("image/")) return;
		const reader = new FileReader();
		reader.onload = (e) => setPhoto(e.target.result);
		reader.readAsDataURL(file);
	};

	const handleDownload = async () => {
		try {
			const { default: html2canvas } =
				await import("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.esm.js");

			if (!flyerRef.current) {
				console.error("Flyer element not found!");
				return;
			}

			await document.fonts.ready;

			// Give the browser a split second to ensure styles are computed
			const canvas = await html2canvas(flyerRef.current, {
				scale: 3,
				useCORS: true,
				allowTaint: false,
				logging: true,
				imageTimeout: 0,
				onclone: (clonedDoc) => {
					const element = clonedDoc.querySelector("[ref]");
					if (element) element.style.imageRendering = "crisp-edges";
				},
			});

			const dataUrl = canvas.toDataURL("image/png");

			// Fallback for some browsers: explicitly creating the download
			const link = document.createElement("a");
			link.setAttribute("download", "my-flyer.png");
			link.setAttribute("href", dataUrl);
			document.body.appendChild(link); // Required for Firefox
			link.click();
			document.body.removeChild(link);
		} catch (error) {
			console.error("Download failed:", error);
		}
	};

	return (
		<>
			<div
				style={{
					width: "100dvw",
					display: "flex",
					flexDirection: "column",
					alignContent: "center",
					justifyContent: "center",
					gap: "40px",
				}}
			>
				<div
					style={{
						width: "fit-content",
						alignSelf: "center",
						display: "flex",
						flexDirection: "column",
						gap: "20px",
					}}
				>
					<h2>Customize your Flyer</h2>
					<div>
						<label htmlFor="fullname">Your Full Name</label>
						<input
							type="text"
							name="fullname"
							id="fullname"
							placeholder="Enter your FullName"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="fullname">Your Role/Title</label>
						<input
							type="text"
							name="fullname"
							id="title"
							placeholder="Enter your FullName"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div>
						<div
							onClick={() => fileInputRef.current?.click()}
							style={{
								border: `2px dashed ${"rgba(255,255,255,0.2)"}`,
								borderRadius: "12px",
								padding: "24px 16px",
								textAlign: "center",
								cursor: "pointer",
								background: "rgba(59,130,246,0.1)",
								transition: "all 0.2s",
								position: "relative",
								overflow: "hidden",
							}}
						>
							{photo ? (
								<div style={{ position: "relative" }}>
									<img
										src={photo}
										alt="preview"
										style={{
											width: "100px",
											height: "100px",
											objectFit: "cover",
											borderRadius: "50%",
											border: "3px solid #3b82f6",
										}}
									/>
									<p
										style={{
											color: "rgba(255,255,255,0.5)",
											fontSize: "12px",
											margin: "8px 0 0",
										}}
									>
										Click to change
									</p>
								</div>
							) : (
								<>
									<div style={{ fontSize: "36px", marginBottom: "8px" }}>
										📷
									</div>
									<p
										style={{
											color: "rgba(255,255,255,0.5)",
											margin: 0,
											fontSize: "13px",
										}}
									>
										Click and drop your photo here
									</p>
								</>
							)}
						</div>
						<input
							ref={fileInputRef}
							type="file"
							accept="image/*"
							style={{ display: "none" }}
							onChange={(e) => handleFile(e.target.files[0])}
						/>
					</div>
					<div>
						<button
							onClick={handleDownload}
							style={{
								background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
								color: "#fff",
								border: "none",
								borderRadius: "12px",
								padding: "14px",
								fontSize: "14px",
								fontWeight: 700,
								letterSpacing: "1px",
								cursor: "pointer",
								textTransform: "uppercase",
								transition: "opacity 0.2s",
							}}
							onMouseOver={(e) => (e.target.style.opacity = "0.85")}
							onMouseOut={(e) => (e.target.style.opacity = "1")}
						>
							⬇ Download Flyer
						</button>
					</div>
				</div>

				<div
					ref={flyerRef}
					style={{
						width: "463px",
						height: "500px",
						alignSelf: "center",
					}}
				>
					<img
						src="/assets/new_temp.png"
						alt="background"
						style={{
							position: "absolute",
							width: "463px",
							height: "500px",
							left: "50%",
							translate: "-43% 0",
							zIndex: -1,
						}}
					/>
					{photo ? (
						<div
							style={{
								position: "relative",
								left: "253.26px",
								top: "64.5px",
								height: "258.5px",
								borderRadius: "33px",
								width: "178px",
								overflow: "hidden",
								backgroundImage: `url(${photo})`,
								backgroundSize: "cover",
								backgroundPosition: "top center",
								backgroundRepeat: "no-repeat",
								backgroundColor: "#3DAFF9",
							}}
						></div>
					) : (
						<div
							style={{
								textAlign: "center",
								display: "flex",
								alignContent: "center",
								flexDirection: "column",
								justifyContent: "center",
								background: "#3DAFF9",
								position: "relative",
								left: "253.3px",
								top: "64.5px",
								height: "258.5px",
								borderRadius: "33px",
								width: "178px",
							}}
						>
							<div style={{ fontSize: "40px" }}>👤</div>
							<div
								style={{
									fontSize: "10px",
									marginTop: "4px",
								}}
							>
								Upload photo
							</div>
						</div>
					)}
					<div
						style={{
							position: "relative",
							color: "white",
							justifyContent: "center",
							alignContent: "center",
							width: "178px",
							height: "57px",
							left: "253.3px",
							top: "66px",
							display: "flex",
							flexDirection: "column",
							gap: "0px",
						}}
					>
						<h2
							style={{
								fontFamily: "Poetsen One",
								fontStyle: "normal",
								fontWeight: 400,
								fontSize: "15px",
								lineHeight: "10px",
								margin: "0px",
								textTransform: "uppercase",
							}}
						>
							{name}
						</h2>
						<p
							style={{
								fontFamily: "Montserrat",
								fontStyle: "medium",
								fontWeight: 500,
								fontSize: "10px",
								lineHeight: "20px",
								margin: "0px",
								textTransform: "uppercase",
							}}
						>
							{title}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
