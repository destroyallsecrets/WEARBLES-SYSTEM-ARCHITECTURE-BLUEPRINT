import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import ArchitectureSection from './components/ArchitectureSection';
import Footer from './components/Footer';
import { ArchitectureData } from './types';

const architectureData: ArchitectureData[] = [
  {
    id: 'arch-1',
    methodTag: 'METHOD 01',
    methodTagColorClass: 'bg-blue-600',
    title: 'Asynchronous Multimodal Webhook Orchestration',
    diagram: {
      iconClass: 'fa-brands fa-whatsapp',
      iconColorClass: 'text-green-500',
      title: 'ARCH_DIAGRAM: MSG_INTERCEPT',
      nodes: [
        {
          text: 'Client Hardware (Optical Capture)',
          className: 'border-green-500/30',
          explanation: 'This refers to the Meta Ray-Ban Smart Glasses capturing images or videos from the user\'s perspective. This is the initial data source.',
        },
        {
          text: 'Meta Graph API / WhatsApp Business API',
          explanation: 'The captured content is sent to Meta\'s APIs, typically WhatsApp Business API, which acts as the ingestion point for the data.',
        },
        {
          text: 'Middleware Layer (Python/Node.js)',
          className: 'border-cyan-500/50',
          explanation: 'A custom server-side application built with Python or Node.js that processes incoming payloads. It includes a Payload Parser to interpret the data and a Context Manager to maintain conversation history.',
          subNodes: [[{ text: 'Payload Parser' }, { text: 'Context Manager' }]],
        },
        {
          text: 'Inference Engine (GPT-4o / Gemini 1.5)',
          className: 'border-purple-500/30',
          explanation: 'The core AI model (e.g., GPT-4o or Gemini 1.5) that analyzes the visual and textual data, generates responses, and performs tasks based on the input.',
        },
        {
          text: 'TTS Synthesis & Message Injection',
          explanation: 'The AI-generated response is converted into speech using Text-to-Speech (TTS) synthesis and then injected back into the wearable hardware (e.g., via bone conduction speakers) or another messaging platform.',
        },
      ],
    },
    ingestionProtocol: {
      title: 'Ingestion Protocol',
      items: [
        { prefix: '>', prefixColorClass: 'text-cyan-500', content: 'Protocol: HTTPS Webhooks' },
        { prefix: '>', prefixColorClass: 'text-cyan-500', content: 'Payload: JSON (MIME: image/jpeg)' },
        { prefix: '>', prefixColorClass: 'text-cyan-500', content: 'Latency Target: <2500ms' },
        { prefix: '>', prefixColorClass: 'text-cyan-500', content: 'Endpoint: Meta Graph API v19.0' },
      ],
    },
    computeStack: {
      title: 'Compute Stack',
      items: [
        { prefix: '#', prefixColorClass: 'text-purple-500', content: 'Runtime: AWS Lambda / Docker Container' },
        { prefix: '#', prefixColorClass: 'text-purple-500', content: 'Vision Model: Transformer-based VLM' },
        { prefix: '#', prefixColorClass: 'text-purple-500', content: 'State Mgmt: Redis (Conversation History)' },
        { prefix: '#', prefixColorClass: 'text-purple-500', content: 'Output: Twilio Programmable Msg / Graph API' },
      ],
    },
  },
  {
    id: 'arch-2',
    methodTag: 'METHOD 02',
    methodTagColorClass: 'bg-red-600',
    title: 'Real-Time RTMP Frame Extraction & CV Pipeline',
    diagram: {
      iconClass: 'fa-solid fa-video',
      iconColorClass: 'text-red-500',
      title: 'ARCH_DIAGRAM: VIDEO_INGEST',
      nodes: [
        {
          text: 'Client Hardware (Livestream Mode)',
          explanation: 'The wearable device is put into a livestream mode, continuously streaming video data to an external server.',
        },
        {
          text: 'Private RTMP Server / OBS Headless',
          explanation: 'A dedicated RTMP (Real-Time Messaging Protocol) server or a headless OBS instance receives the live video stream for processing.',
        },
        {
          text: 'Local Inference Server (GPU)',
          className: 'border-red-500/50',
          explanation: 'A powerful local server equipped with a GPU processes the video stream in real-time. It uses an FFmpeg Frame Buffer to extract individual frames and feeds them to Computer Vision models like YOLOv8 for object detection or facial recognition.',
          subNodes: [[{ text: 'FFmpeg Frame Buffer' }], [{ text: 'YOLOv8 / Facial Recognition Model' }]],
        },
        {
          text: 'Side-Channel Audio Feedback (Bone Conduction)',
          explanation: 'Analysis results or instructions are provided back to the user through a low-latency audio channel, typically using bone conduction technology integrated into the glasses.',
        },
      ],
    },
    ingestionProtocol: {
      title: 'Stream Configuration',
      items: [
        { prefix: '>', prefixColorClass: 'text-red-500', content: 'Transport: RTMP / RTMPS' },
        { prefix: '>', prefixColorClass: 'text-red-500', content: 'Frame Rate: 30fps (Keyframe Interval: 2s)' },
        { prefix: '>', prefixColorClass: 'text-red-500', content: 'Resolution: 1080p Downsampled to 720p' },
        { prefix: '>', prefixColorClass: 'text-red-500', content: 'Buffer: Zero-latency configuration' },
      ],
    },
    computeStack: {
      title: 'Processing Matrix',
      items: [
        { prefix: '#', prefixColorClass: 'text-orange-500', content: 'Framework: PyTorch / TensorRT' },
        { prefix: '#', prefixColorClass: 'text-orange-500', content: 'Library: OpenCV (cv2)' },
        { prefix: '#', prefixColorClass: 'text-orange-500', content: 'Hardware: CUDA Core GPU Local' },
        { prefix: '#', prefixColorClass: 'text-orange-500', content: 'Feedback: Bluetooth A2DP Sink' },
      ],
    },
  },
  {
    id: 'arch-3',
    methodTag: 'METHOD 03',
    methodTagColorClass: 'bg-indigo-600',
    title: 'Native Mobile Bridge (SDK Implementation)',
    diagram: {
      iconClass: 'fa-brands fa-android',
      iconColorClass: 'text-indigo-500',
      title: 'ARCH_DIAGRAM: BLE_GATT_BRIDGE',
      nodes: [
        {
          text: 'Client Hardware (Peripheral)',
          explanation: 'The wearable glasses act as a Bluetooth Low Energy (BLE) peripheral, exposing GATT services and characteristics.',
        },
        {
          text: 'BLE 5.2 / WiFi Direct Transport',
          className: 'border-indigo-500',
          explanation: 'Data is transported wirelessly using BLE 5.2 or potentially WiFi Direct for higher bandwidth requirements, connecting the glasses to a mobile device.',
        },
        {
          text: 'Host Application (Android/iOS)',
          className: 'border-indigo-500/50',
          explanation: 'A native mobile application (Android or iOS) running on a smartphone acts as the central device. It discovers BLE services on the glasses and subscribes to data characteristics for real-time information retrieval.',
          subNodes: [[{ text: 'Service Discovery' }, { text: 'Data Subscribe' }]],
        },
        {
          text: 'Cloud Sync / Local Storage',
          explanation: 'Data received by the mobile application can either be synchronized with cloud storage for long-term access and processing or stored locally on the device.',
        },
      ],
    },
    ingestionProtocol: {
      title: 'Connectivity Stack',
      items: [
        { prefix: '>', prefixColorClass: 'text-indigo-500', content: 'Protocol: GATT (Generic Attribute Profile)' },
        { prefix: '>', prefixColorClass: 'text-indigo-500', content: 'SDK: Meta Wearables Device Access Toolkit' },
        { prefix: '>', prefixColorClass: 'text-indigo-500', content: 'Topology: Central (Phone) <-> Peripheral (Glasses)' },
        { prefix: '>', prefixColorClass: 'text-indigo-500', content: 'Transport: High-bandwidth BLE L2CAP' },
      ],
    },
    computeStack: {
      title: 'Runtime Environment',
      items: [
        { prefix: '#', prefixColorClass: 'text-pink-500', content: 'Native: Kotlin (Android) / Swift (iOS)' },
        { prefix: '#', prefixColorClass: 'text-pink-500', content: 'Event Loop: React Native Bridge (Optional)' },
        { prefix: '#', prefixColorClass: 'text-pink-500', content: 'Permissions: BLUETOOTH_CONNECT, ACCESS_FINE_LOCATION' },
      ],
    },
  },
];

const App: React.FC = () => {
  const [selectedNodeInfo, setSelectedNodeInfo] = useState<{ archIndex: number; nodeIndex: number; } | null>(null);
  const explanationPanelRef = useRef<HTMLDivElement>(null);

  const handleNodeClick = (archIndex: number, nodeIndex: number) => {
    if (selectedNodeInfo?.archIndex === archIndex && selectedNodeInfo?.nodeIndex === nodeIndex) {
      // If the same node is clicked, deselect it
      setSelectedNodeInfo(null);
    } else {
      setSelectedNodeInfo({ archIndex, nodeIndex });
      // Scroll to the explanation panel after state update
      setTimeout(() => {
        if (explanationPanelRef.current) {
          explanationPanelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Small delay to allow state update and rendering
    }
  };

  return (
    <>
      <Header
        title="SYSTEM ARCHITECTURE BLUEPRINT"
        version="VER 2.4.0"
        target="TARGET: META_RAYBAN_EXT"
        accessStatus="RESTRICTED_ACCESS"
      />
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <Introduction />
        {architectureData.map((data, index) => (
          <ArchitectureSection
            key={data.id}
            data={data}
            archIndex={index}
            onNodeClick={handleNodeClick}
            selectedNodeInfo={selectedNodeInfo}
            explanationPanelRef={explanationPanelRef}
          />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default App;
