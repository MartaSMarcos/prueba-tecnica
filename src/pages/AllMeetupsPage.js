import { useFetch } from "../util-hooks/useFetch";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage() {
  const { data, loading, error } = useFetch({ url: "/data.json" });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const meetups = data?.meetups || [];

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {meetups.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            title={meetup.title}
            image={meetup.image}
            address={meetup.address}
            description={meetup.description}
          />
        ))}
      </ul>
    </section>
  );
}
