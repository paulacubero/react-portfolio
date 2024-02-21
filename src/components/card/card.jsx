import style from "./style.module.css";
import { icons } from "../../consts";
export function Card({ title, children }) {
  return (
    <div className={style.cardWrapper}>
      <div className={style.cardTitle}>
        <span class="bg-gradient-to-r from-secondary dark:from-purple-400 leading-snug to-primary dark:to-orange-400 via-pink-500 dark:via-pink-500 via-40% bg-clip-text text-transparent font-bold text-4xl">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}
