import Image from 'next/image'
import Link from 'next/link'

import logoPic from '../../../public/logo.png'

const Footer = () => {
  return (
    <>
      <footer>
        <Image src={logoPic} alt="SIP" />
        <p>SIP「スマートバイオ産業・農業基盤技術」データ連携ポータル</p>
        <ul>
          <li>
            <Link href="/data">データリスト</Link>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              SIP BioDB Search
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
