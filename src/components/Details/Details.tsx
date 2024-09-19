import { useParams } from "react-router-dom";
import styles from "./Details.module.scss";
import { useEffect, useState } from "react";
import { SignType } from "../../types/app_types";

const Details = () => {
  const [getDetailsByName, setGetDetailsByName] = useState<null | SignType>(null);
  let { id } = useParams();

  const fetchByName = async () => {
    try {
      let response = await fetch(`https://3c760136f0805f82.mokky.dev/zodiac/${id}`);

      let data = await response.json();
      if (data) {
        setGetDetailsByName(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchByName();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.flex_box}>
        <div className={styles.image_box}>
          <img src={getDetailsByName?.image} className={styles.image} alt="" />
        </div>

        <div className={styles.text_box}>
          <div className={styles.box_layout}>
            <div className={styles.text}>
              <p>
                <strong>Name: </strong>
                {getDetailsByName?.name}
              </p>
            </div>
            <div className={styles.text}>
              <p>
                <strong>Birthday: </strong>
                {getDetailsByName?.born}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.description_box}>
          <p>{getDetailsByName?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
