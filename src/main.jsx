import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";
import { SiVrchat } from "react-icons/si";
import { FaBirthdayCake, FaMapMarkerAlt, FaBriefcase, FaNetworkWired } from "react-icons/fa";
import './index.css'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <head>
	  <title>tkdn.jp</title>
	</head>
    <div className="flex flex-col items-start justify-center min-h-screen bg-white text-gray-900 p-5 max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center w-full mb-10">
        <motion.img
          src="/profile.png"
          alt="Profile Icon"
          className="w-60 h-60 rounded-full border-4 border-blue-400 mb-4 sm:mb-0 sm:mr-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold">Tsukudani</h1>
          <p className="text-gray-600 text-left ml-3">応用起床技術者，寝スペ</p>
          {console.log("Rendering Social Icons")}
          <div className="flex space-x-4 mt-3 ml-3 text-blue-500">
			<a href="https://github.com/tsukudani0412" 
			   target="_blank"
			   rel="noopener noreferrer"
			 >
			  <FaGithub size={32} color={'#243952'}/>
			</a>
			<a href="https://twitter.com/salty_poison" 
			   target="_blank"
			   rel="noopener noreferrer"
			 >
			  <FaTwitter size={32} color={'#243952'}/>
			</a>
			<a href="https://vrchat.com/home/user/usr_d2eda905-7800-484f-9e6a-bc90b9782d1c" 
			   target="_blank"
			   rel="noopener noreferrer"
			 >
              <SiVrchat size={32} color={'#243952'}/>
			</a>
          </div>
          <div className="mt-5 ml-3 text-gray-700 space-y-2 text-left">
            <p className="flex items-center space-x-2">
              <FaBirthdayCake className="text-gray-500" />
              <span>2004/04/12</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-500" />
              <span>Tokyo, JAPAN</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaBriefcase className="text-gray-500" />
              <span>Facility engineer</span>
            </p>
			<p className="flex items-center space-x-2">
              <FaNetworkWired className="text-gray-500" />
			  <a href="https://as150325.net/" 
			   target="_blank"
			   rel="noopener noreferrer"
			  >
                <span className="underline text-gray-700 visited:text-gray-700 active:text-gray-700 focus:text-gray-700">AS150325</span>
			  </a>
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2 text-left">Interests</h2>
          <div className="text-gray-700 space-y-4 text-left">
            <div className="relative pl-4">              
              <p className="font-bold">Networking</p>
              <p className="ml-4">インターネットの運用に興味があります．学習の一環としてAS150325を運用しています．</p>
			  <p className="ml-4">好きなRFCは826，好きなルーティングソフトウェアはFRRoutingです．</p>
			  <p className="ml-4 mt-1">触れます:</p>
			  <p className="ml-6">NEC UNIVERGE IX, Allied Telesis AR, VyOS, pfSense, OpenWrt, Cisco ISR, Cisco Catalyst, Cisco Aironet, Fortigate</p>
			  <p className="ml-4 mt-1">やってみたい:</p>
			  <p className="ml-6">DPDK, VPP, WDM, SONiC, 拠点間をVXLANで繋ぐ, 商用IXへの接続</p>
              <p className="font-bold mt-4">Electronics</p>
              <p className="ml-4">電子工作が趣味です．たまに何かを作ります．</p>
			  <p className="ml-4">愛用しているはんだこては白光 FX-600，よく使うCADはKiCAD，Autodesk Fusionです．</p>
              <p className="font-bold mt-4">VR/XR</p>
              <p className="ml-4">よくVRChatにいます．たまにシェーダーを書きます．</p>
			  <p className="ml-4">Gaussian SplattingやNeRF，LiDARを用いたフォトグラメトリなど，基底現実をVR空間に持ち込む技術が好きです．</p>
            </div>
          </div>
        </motion.section>
        <hr className="border-gray-300" />
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2 text-left">History</h2>
          <div className="text-gray-700 space-y-4 text-left">
            <div className="relative pl-8">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              <p className="font-bold">2020 - 2025</p>
              <p className="ml-4">東京工業高等専門学校，電子工学専攻(準学士)</p>
              <p className="font-bold mt-4">2025 -</p>
              <p className="ml-4">クラウド事業者，ファシリティエンジニア</p>
            </div>
          </div>
        </motion.section>
        <hr className="border-gray-300" />
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2 text-left">Qualifications, Licenses</h2>
          <div className="text-gray-700 space-y-4 text-left">
            <div className="relative pl-8">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              <p className="font-bold">2018</p>
              <p className="ml-4">IPA 基本情報技術者</p>
			  <p className="ml-4">実用英語技能検定 準2級</p>
              <p className="font-bold mt-4">2022</p>
              <p className="ml-4">普通自動車第一種運転免許</p>
			  <p className="ml-4">IPA 応用情報技術者</p>
              <p className="font-bold mt-4">2023</p>
			  <p className="ml-4">IPA ネットワークスペシャリスト</p>
			  <p className="ml-4">第二種電気工事士</p>
			  <p className="ml-4">TOEIC Listening & Reading Test: 775</p>
			  <p className="ml-4">第3級アマチュア無線技士免許</p>
              <p className="font-bold mt-4">2024</p>
			  <p className="ml-4">危険物取扱者 乙種第4類</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  </StrictMode>,
)
