import styles from "./Details.module.scss";

const Details = () => {
  return (
    <div className={styles.container}>

      <div className={styles.flex_box}>
        
        <div className={styles.image_box}>
          <img src="https://as2.ftcdn.net/v2/jpg/05/73/92/41/1000_F_573924187_6WMFJlK04O5a2nviZFtCJ7NRYPqXXBTl.jpg" className={styles.image} alt="" />
        </div>

        <div className={styles.text_box}>
            <div className={styles.box_layout}>
                

          <div className={styles.text}>
            <p>
              <strong>Name: </strong>any{" "}
            </p>
          </div>

          <div className={styles.text}>
            <p>
              <strong>Birthday: </strong>December{" "}
            </p>
          </div>

            </div>


        </div>

        <div className={styles.description_box}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eligendi ad assumenda atque cupiditate inventore nostrum! Ullam labore omnis iste, repellat harum quis ratione eligendi fugiat in inventore odit minima!</p>
        </div>

      </div>

    </div>
  );
};

export default Details;
