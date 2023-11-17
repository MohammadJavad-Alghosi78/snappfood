import { Card, Typography } from "@/_components";

const Vendors = () => {
  return (
    <>
      <Typography tag="h1" color="red">
        رستورا‌ن‌ها
      </Typography>
      <Typography tag="h2" color="blue">
        رستورا‌ن‌ها
      </Typography>
      <Typography tag="h3" color="green">
        رستورا‌ن‌ها
      </Typography>
      <Typography tag="h4" color="black">
        رستورا‌ن‌ها
      </Typography>
      <Typography tag="h5" color="pink">
        رستورا‌ن‌ها
      </Typography>
      <Typography tag="h6" color="orange">
        رستورا‌ن‌ها
      </Typography>
      <Typography tag="div" color="purple">
        رستورا‌ن‌ها
      </Typography>
      <Typography tag="span" color="gray">
        رستورا‌ن‌ها
      </Typography>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Card
        coverImage=""
        numOfVotes={2}
        rating={2.5}
        restaurantLogo=""
        restaurantTitle=""
      />
    </>
  );
};

export default Vendors;
