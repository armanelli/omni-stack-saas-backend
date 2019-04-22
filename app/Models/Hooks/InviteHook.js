"use strict";

const User = use("App/Model/User");

const InviteHook = (exports = module.exports = {});

InviteHook.sendInvitationEmail = async invite => {
  const { email } = invite;

  const invited = await User.findBy("email", email);

  if (invited) {
    await invited.teams().attach(invite.team_id);
  } else {
    //TODO: Enviar e-mail convidando para criar a conta.

    console.log("Criar conta e enviar email");
  }
};
