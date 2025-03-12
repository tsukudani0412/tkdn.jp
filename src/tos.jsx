import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <div className="flex flex-col items-start justify-center min-h-screen bg-white text-gray-900 p-5 max-w-3xl mx-auto">
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-2 text-left">Wi-Fi利用規約</h2>
        <div className="text-gray-700 space-y-4 text-left">
          <div className="relative pl-4">              
            <p className="ml-4 mt-3">本Wi-FiサービスはTsukudani Networkが提供する実験ネットワーク上に構築されています．</p>
            <p className="ml-4 mt-3">本Wi-Fiサービスは無償で提供されます．本サービスを利用するユーザーが被った損害について，当団体は一切の責任を負わないものとします．</p>
            <p className="ml-4 mt-3">サービス内容は予告なしに変更，中断，終了される場合があります．</p>
            <p className="ml-4 mt-3">利用中の統計情報(通信量，通信機器の仕様など)について，個人を特定できない形式にした上で研究に使用する場合があります．</p>
            <p className="ml-4 mt-3">eduroam，OpenRoamingの規約に基づき，認証ログを最低4週間保管します．</p>
            <p className="ml-4 mt-3">利用中に収集されたデータ(個人を特定可能なものを含む)について，法的権限を有する機関からの要請に応じて提供する場合があります．</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-semibold mt-10 mb-2 text-left">Wi-Fi Terms of Service</h2>
        <div className="text-gray-700 space-y-4 text-left">
          <div className="relative pl-4">              
            <p className="ml-4 mt-3">This Wi-Fi service is built on an experimental network provided by Tsukudani Network.</p>
            <p className="ml-4 mt-3">This Wi-Fi service is provided free of charge. Our organization assumes no responsibility for any damages incurred by users of this service.</p>
            <p className="ml-4 mt-3">The service content may be changed, suspended, or terminated without prior notice.</p>
            <p className="ml-4 mt-3">Statistical information during use (such as data traffic and device specifications) may be used for research purposes in a format that does not identify individuals.</p>
            <p className="ml-4 mt-3">Authentication logs will be retained for a minimum of four weeks in accordance with the policies of eduroam and OpenRoaming.</p>
            <p className="ml-4 mt-3">Data collected during use (including personally identifiable information) may be provided to legally authorized institutions upon request.</p>
          </div>
        </div>
      </div>
    </div>
  </StrictMode>,
)
