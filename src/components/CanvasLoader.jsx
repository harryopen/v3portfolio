import{Html,useProgress} from '@react-three/drei'

function CanvasLoader() {
  const {progress}=useProgress();
  return (
    <div>
         <Html
         as="div"
         center
         style={{
          display:'flex',
          justifyContent:'Center',
          alignItems:'center',
          flexDirection:'column'
         }}>
          <span className='canvas-loader'>
            <p style={{fontSize:14,color:'#F1F1F1',fontWeight:800, marginTop:40}}>{progress!=0?`${progress.toFixed(2)}%`:`loading....`}
              </p></span>      </Html>
    </div>
  )
}

export default CanvasLoader
