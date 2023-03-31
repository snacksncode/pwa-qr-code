import "./Content.css";
import { FC, useEffect, useRef, useState } from "react";
import jsQR from "jsqr";

type Props = {};

// done: get user's camera and show it on the page
// done: allow user to stop using their camera
// done: start scanning camera every 250ms using canvas and check for QR code
// done: if found, set the state, only update the state if new code is found as to preserve the last one

export const Content: FC<Props> = ({}) => {
  const [scannedCode, setScannedCode] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const intervalId = useRef<NodeJS.Timer | null>(null);

  const getMediaStream = async () => {
    setIsLoading(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: "environment" } });
    setMediaStream(stream);
  };

  const stopAllMediaStreams = () => {
    mediaStream?.getTracks().forEach((track) => track.stop());
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setMediaStream(null);
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  };

  useEffect(() => {
    if (!videoRef.current) return;
    const isVideoPlaying = !!(
      videoRef.current.currentTime > 0 &&
      !videoRef.current.paused &&
      !videoRef.current.ended &&
      videoRef.current.readyState > 2
    );
    if (isVideoPlaying) return;

    if (mediaStream) {
      videoRef.current.srcObject = mediaStream;
      videoRef.current.play();
      setIsLoading(false);
      intervalId.current = setInterval(scan, 250);
    }
  }, [mediaStream]);

  const scan = () => {
    if (!canvasRef.current || !videoRef.current) return;

    const canvas = canvasRef.current;
    const video = videoRef.current;

    const context = canvasRef.current.getContext("2d");
    if (!context) return;

    console.log("scanning...");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);

    if (code) {
      setScannedCode(code.data);
    }
  };

  return (
    <div className="wrapper">
      {mediaStream && <video ref={videoRef} width="400" height="300" playsInline autoPlay />}
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <div className="buttons">
        {!mediaStream ? (
          <button onClick={getMediaStream}>{isLoading ? "Loading..." : "Start Camera"}</button>
        ) : (
          <button onClick={stopAllMediaStreams}>Stop Camera</button>
        )}
        <a href="https://www.qr-code-generator.com/" target="_blank">
          Generator
        </a>
      </div>
      {scannedCode && <p style={{ wordBreak: "break-all" }}>Scanned Code: {scannedCode}</p>}
    </div>
  );
};
