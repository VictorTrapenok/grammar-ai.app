import clsx from "clsx";
import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  Img?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "👥 Social Features",
    Img: useBaseUrl("/img/icons/social.png"),
    description: <>Chat with MalO through text messages, receive photos and share your moments</>,
  },
  {
    title: "📸 Camera Companion",
    Img: useBaseUrl("/img/icons/camera.png"),
    description: <>MalO appears in your photos, creating unique and unforgettable memories</>,
  },
  {
    title: "🌙 Always There",
    Img: useBaseUrl("/img/icons/companion.png"),
    description: <>24/7 support, personal AI companion who will never leave you</>,
  },
];

function Feature({ title, Svg, description, Img }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {Img && <img src={Img} style={{ height: "200px" }} />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomepageSkillsHeader(): JSX.Element {
  return (
    <section className={styles.features} style={{ backgroundColor: "#8B0000", color: "white", fontSize: "larger", fontWeight: "bold" }}>
      <div className="container" style={{ textAlign: `center` }}>
        🔬 Anomalous Technologies / 📱 Android Application / 👁️ Augmented Reality
      </div>
    </section>
  );
}
