import '@/styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Top from '@/src/component/Top'
import Footer from '@/src/component/Footer'


export default function App({ Component, pageProps }) {
  return (
  <div style={{ margin: "0 auto" }}>
  <Top></Top>
  <br /><br /><br /><br /><br />
  <Component {...pageProps} />
  <Footer/>
  </div>
  );
}

/** 페이지 전환시 레이아웃 유지
페이지 전환 시 상태값 유지
커스텀 에러 핸들링 가능
추가적인 데이터 주입 가능
글로벌 CSS 사용 가능
 */

