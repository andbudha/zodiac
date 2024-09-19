import styles from "./FlipCard.module.scss";

const FlipCard = () => {
  return (
    <div className={styles.flip_card}>
      <div className={styles.flip_card_inner}>
        <div className={styles.flip_card_front}>
          <img src="img_avatar.png" alt="Avatar" />
        </div>
        <div className={styles.flip_card_back}>
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
