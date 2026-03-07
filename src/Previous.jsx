// export default function Previous() {
// 	return (
// 		<div
// 			// ref={""}
// 			style={{
// 				width: "420px",
// 				minHeight: "520px",
// 				background: "#fff",
// 				borderRadius: "20px",
// 				overflow: "hidden",
// 				position: "relative",
// 				boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
// 				flexShrink: 0,
// 			}}
// 		>
// 			{/* Decorative curves */}
// 			<svg
// 				style={{ position: "absolute", top: 0, right: 0, width: "120px" }}
// 				viewBox="0 0 120 100"
// 			>
// 				<path
// 					d="M60,0 Q120,0 120,60 Q120,100 80,100"
// 					fill="none"
// 					stroke="#3b82f6"
// 					strokeWidth="3"
// 				/>
// 			</svg>
// 			<svg
// 				style={{
// 					position: "absolute",
// 					top: "10px",
// 					right: "10px",
// 					width: "80px",
// 				}}
// 				viewBox="0 0 80 60"
// 			>
// 				<path
// 					d="M40,0 Q80,0 80,40 Q80,60 60,60"
// 					fill="none"
// 					stroke="#e05a2b"
// 					strokeWidth="3"
// 				/>
// 			</svg>
// 			<svg
// 				style={{
// 					position: "absolute",
// 					bottom: "80px",
// 					left: "0",
// 					width: "60px",
// 				}}
// 				viewBox="0 0 60 80"
// 			>
// 				<path
// 					d="M60,0 Q0,0 0,40 Q0,80 30,80"
// 					fill="none"
// 					stroke="#3b82f6"
// 					strokeWidth="2.5"
// 				/>
// 			</svg>

// 			{/* Header */}
// 			<div
// 				style={{
// 					display: "flex",
// 					alignItems: "center",
// 					gap: "10px",
// 					padding: "22px 22px 10px",
// 				}}
// 			>
// 				<div
// 					style={{
// 						width: "48px",
// 						height: "48px",
// 						borderRadius: "50%",
// 						background: "linear-gradient(135deg, #1e3a8a, #dc2626)",
// 						display: "flex",
// 						alignItems: "center",
// 						justifyContent: "center",
// 						fontSize: "20px",
// 						flexShrink: 0,
// 					}}
// 				>
// 					✝
// 				</div>
// 				<div style={{ lineHeight: 1.3 }}>
// 					<div
// 						style={{
// 							fontWeight: 900,
// 							fontSize: "11px",
// 							color: "#1e1e1e",
// 							letterSpacing: "0.5px",
// 						}}
// 					>
// 						THE APOSTOLIC CHURCH
// 					</div>
// 					<div
// 						style={{
// 							fontWeight: 900,
// 							fontSize: "11px",
// 							color: "#1e1e1e",
// 							letterSpacing: "0.5px",
// 						}}
// 					>
// 						ABESAN AREA
// 					</div>
// 					<div
// 						style={{
// 							fontWeight: 900,
// 							fontSize: "11px",
// 							color: "#1e1e1e",
// 							letterSpacing: "0.5px",
// 						}}
// 					>
// 						YOUTH MOVEMENT
// 					</div>
// 				</div>
// 			</div>

// 			{/* Main content row */}
// 			<div
// 				style={{
// 					display: "flex",
// 					padding: "10px 22px 16px",
// 					gap: "16px",
// 					alignItems: "flex-start",
// 				}}
// 			>
// 				{/* Left: text */}
// 				<div style={{ flex: 1 }}>
// 					<div style={{ marginBottom: "16px" }}>
// 						<span
// 							style={{
// 								fontWeight: 900,
// 								fontSize: "clamp(28px,6vw,40px)",
// 								color: "#1a1a2e",
// 								lineHeight: 1.05,
// 								display: "block",
// 							}}
// 						>
// 							I WILL <span style={{ color: "#3b82f6" }}>BE</span>
// 						</span>
// 						<span
// 							style={{
// 								fontWeight: 900,
// 								fontSize: "clamp(28px,6vw,40px)",
// 								color: "#1a1a2e",
// 								lineHeight: 1.05,
// 								display: "block",
// 							}}
// 						>
// 							THERE!
// 						</span>
// 					</div>

// 					{/* Theme box */}
// 					<div style={{ position: "relative" }}>
// 						<div
// 							style={{
// 								background: "#e05a2b",
// 								color: "#fff",
// 								fontSize: "10px",
// 								fontWeight: 800,
// 								padding: "3px 10px",
// 								borderRadius: "20px",
// 								display: "inline-block",
// 								marginBottom: "4px",
// 								letterSpacing: "1px",
// 							}}
// 						>
// 							THEME
// 						</div>
// 						<div
// 							style={{
// 								background: "linear-gradient(135deg, #1d4ed8, #1e40af)",
// 								borderRadius: "12px",
// 								padding: "14px",
// 								position: "relative",
// 								overflow: "hidden",
// 							}}
// 						>
// 							{/* network dots pattern */}
// 							{[...Array(6)].map((_, i) => (
// 								<div
// 									key={i}
// 									style={{
// 										position: "absolute",
// 										width: "4px",
// 										height: "4px",
// 										background: "rgba(255,255,255,0.15)",
// 										borderRadius: "50%",
// 										top: `${15 + i * 12}%`,
// 										left: `${10 + i * 14}%`,
// 									}}
// 								/>
// 							))}
// 							<p
// 								style={{
// 									color: "#fff",
// 									fontWeight: 900,
// 									fontSize: "13px",
// 									margin: 0,
// 									lineHeight: 1.4,
// 									letterSpacing: "0.5px",
// 									textTransform: "uppercase",
// 									position: "relative",
// 								}}
// 							>
// 								LEVERAGING
// 								<br />
// 								NETWORKING FOR
// 								<br />
// 								CAREER
// 								<br />
// 								DEVELOPMENT
// 							</p>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Right: photo card */}
// 				<div style={{ width: "150px", flexShrink: 0 }}>
// 					<div
// 						style={{
// 							background: "linear-gradient(180deg, #c0d9f0 0%, #1d4ed8 100%)",
// 							borderRadius: "16px",
// 							overflow: "hidden",
// 							paddingTop: "8px",
// 						}}
// 					>
// 						<div
// 							style={{
// 								width: "134px",
// 								height: "160px",
// 								margin: "0 auto",
// 								background: photo
// 									? "transparent"
// 									: "linear-gradient(135deg, #c4a882, #a08060)",
// 								borderRadius: "12px 12px 0 0",
// 								overflow: "hidden",
// 								display: "flex",
// 								alignItems: "center",
// 								justifyContent: "center",
// 							}}
// 						>
// 							{photo ? (
// 								<img
// 									src={photo}
// 									alt="speaker"
// 									style={{
// 										width: "100%",
// 										height: "100%",
// 										objectFit: "cover",
// 										objectPosition: "top",
// 									}}
// 								/>
// 							) : (
// 								<div
// 									style={{
// 										textAlign: "center",
// 										color: "rgba(255,255,255,0.7)",
// 									}}
// 								>
// 									<div style={{ fontSize: "40px" }}>👤</div>
// 									<div style={{ fontSize: "10px", marginTop: "4px" }}>
// 										Upload photo
// 									</div>
// 								</div>
// 							)}
// 						</div>
// 						<div style={{ padding: "10px 8px", textAlign: "center" }}>
// 							<div
// 								style={{
// 									color: "#fff",
// 									fontWeight: 900,
// 									fontSize: name.length > 15 ? "9px" : "11px",
// 									letterSpacing: "0.5px",
// 									lineHeight: 1.3,
// 								}}
// 							>
// 								{name}
// 							</div>
// 							<div
// 								style={{
// 									color: "rgba(255,255,255,0.75)",
// 									fontSize: "8px",
// 									marginTop: "3px",
// 								}}
// 							>
// 								({title})
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Bottom bar */}
// 			<div
// 				style={{
// 					background:
// 						"linear-gradient(90deg, #1d4ed8 0%, #2563eb 60%, #e05a2b 100%)",
// 					padding: "14px 22px",
// 					display: "flex",
// 					flexDirection: "column",
// 					gap: "6px",
// 				}}
// 			>
// 				<div
// 					style={{
// 						display: "flex",
// 						alignItems: "center",
// 						gap: "12px",
// 						justifyContent: "center",
// 					}}
// 				>
// 					<span style={{ color: "#fff", fontSize: "13px" }}>📅</span>
// 					<span
// 						style={{
// 							color: "#fff",
// 							fontWeight: 900,
// 							fontSize: "16px",
// 							letterSpacing: "1px",
// 						}}
// 					>
// 						SUN.15TH.MAR.2025
// 					</span>
// 					<span style={{ color: "#fff", fontSize: "13px" }}>🕘</span>
// 					<span
// 						style={{
// 							color: "#fff",
// 							fontWeight: 900,
// 							fontSize: "16px",
// 							letterSpacing: "1px",
// 						}}
// 					>
// 						9AM
// 					</span>
// 				</div>
// 				<div style={{ textAlign: "center" }}>
// 					<span
// 						style={{
// 							color: "rgba(255,255,255,0.85)",
// 							fontSize: "9px",
// 							letterSpacing: "0.5px",
// 						}}
// 					>
// 						📍 PLOT 32, 4TH AVENUE, FMWH, ABESAN ESTATE, IPAJA, LAGOS
// 					</span>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
