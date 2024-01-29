const data = {
  STEPS: [
    { value: 1, label: "your info" },
    { value: 2, label: "select plan" },
    { value: 3, label: "add-ons" },
    { value: 4, label: "summary" },
  ],
  PLANS: [
    {
      name: "arcade",
      label: "Arcade",
      price: { month: 9, year: 90 },
      offer: "2 months free",
    },
    {
      name: "advanced",
      label: "Advanced",
      price: { month: 12, year: 120 },
      offer: "2 months free",
    },
    {
      name: "pro",
      label: "Pro",
      price: { month: 15, year: 150 },
      offer: "2 months free",
    },
  ],
  ADD_ONS: [
    {
      ids: 1,
      title: "Online service",
      description: "Access to multiplayer games",
      price: { month: 1, year: 10 },
    },
    {
      ids: 2,
      title: "Large storage",
      description: "Extra 1TB of cloud save",
      price: { month: 2, year: 20 },
    },
    {
      ids: 3,
      title: "Customizable Profile",
      description: "Custom theme on your profile",
      price: { month: 2, year: 20 },
    },
  ],
};

export default data;
