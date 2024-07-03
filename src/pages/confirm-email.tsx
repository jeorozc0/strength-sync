import { AuthWrapper } from "../components/auth-wrapper";
import { ConfirmEmail } from "../components/auth/confirm-email";

export function ConfirmPage() {
  return (
    <AuthWrapper>
      <ConfirmEmail />
    </AuthWrapper>
  );
}
