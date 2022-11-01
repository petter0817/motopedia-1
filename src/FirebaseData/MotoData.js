import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { db } from '../firebase';
import { GetMotoData} from '../Redux/Action/GetMotoData';

const MotoData = () => {
  //狀態
  const [moto, setMoto] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      GetMotoData(moto)
    )
  })

  //Firebase
  const yamaha = collection(db, "YAMAHA")
  const kymco = collection(db, "KYMCO")
  const motonav = collection(db, "MOTONAV")

  useEffect(() => {
    const getMotos = async () => {
      const yamahaData = await getDocs(yamaha);
      const kymcoData = await getDocs(kymco);
      const motonavData = await getDocs(motonav);
      setMoto(
        {
          MOTONAV: motonavData.docs.map(
            (doc) => ({ ...doc.data(), id: doc.id })
          ),
          YAMAHA: yamahaData.docs.map(
            (doc) => ({ ...doc.data(), id: doc.id })
          ),
          KYMCO: kymcoData.docs.map(
            (doc) => ({ ...doc.data(), id: doc.id })
          )
        }
      );
    };
    getMotos();
  }, []);

}

export default MotoData;