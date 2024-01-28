import styles from './FeatureDescription.module.css';

type FeatureDescriptionProps = {
  title: string;
  subHeading: string;
  paragraph: string;
};

export function FeatureDescription(props: FeatureDescriptionProps) {
  return (
    <div className={styles.feature_description}>
      <div className={styles.feature_description__text__container}>
        <h4 className={styles['feature_description__title--md']}>
          {props.title}
        </h4>
        <h2 className={styles['feature_description__title--lg']}>
          {props.subHeading}
        </h2>
        <p className={styles.feature_description__text}>{props.paragraph}</p>
        <button className={styles.feature_description__button}>
          <p className={styles.feature_description__button__text}>Learn More</p>
        </button>
      </div>
    </div>
  );
}
