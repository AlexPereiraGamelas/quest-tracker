/**
 * Adventure page
 *
 * page with adventure details
 */

import { useParams } from "react-router";
import useAdventure from "./useAdventure";
import { QuestTracker, QuestDescription, QuestAdventurers } from "./components";

import styles from "./styles.module.scss";

function Adventure() {
  const { id } = useParams();
  const { title, QUESTS_DATA } = useAdventure(id);

  return (
    <div className={styles.page}>
      <div className={styles.adventure__title}>{title}</div>
      <QuestTracker quests={QUESTS_DATA} />
      <QuestDescription />
      <QuestAdventurers />
    </div>
  );
}

export default Adventure;
