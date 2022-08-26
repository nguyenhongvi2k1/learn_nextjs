import Image from "next/image";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AdddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import classes from "./event-item.module.css";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <Image src={"/" + image} alt={title} width={250} height={160} />
      <div>
        <h2>{title}</h2>
        <div className={classes.date}>
          <DateIcon />
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <AdddressIcon />
          <address>{formatedAddress}</address>
        </div>
      </div>
      <div className={classes.actions}>
        <Button link={exploreLink}>
          <span>Export Event</span>
          <span className={classes.icon}>
            <ArrowRightIcon />
          </span>
        </Button>
        {/* <Link href={exploreLink}>Export Event</Link> */}
      </div>
    </li>
  );
}
export default EventItem;
