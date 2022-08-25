import { subscribeToDracarysClub } from "./firebase/dracarys-club.js";

const txtName = document.getElementById("txtName");
const txtEmail = document.getElementById("txtEmail");
const txtInvite = document.getElementById("txtInvite");
const selectFamily = document.getElementById("selectFamily");
const btnSubscribe = document.getElementById("btnSubscribe");

btnSubscribe.addEventListener("click", async () => {
  const subscription = {
    name: txtName.value,
    email: txtEmail.value,
    invite: txtInvite.value,
    family: selectFamily.value,
  };

  const subscriptionId = await subscribeToDracarysClub(subscription);
  console.log(`Subscripton accept: ${subscriptionId}`);

  txtName.value = '';
  txtEmail.value = '';
  txtInvite.value = ''; 
  selectFamily.value = '0';
});

