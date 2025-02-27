import awsmobile from "@rt/aws-exports";


export const getToken = () => {
  const poolId = awsmobile.aws_user_pools_web_client_id;
  const userId = localStorage.getItem(
    `CognitoIdentityServiceProvider.${poolId}.LastAuthUser`
  );
  const AccessToken = localStorage.getItem(
    `CognitoIdentityServiceProvider.${poolId}.${userId}.accessToken`
  );
  const IdToken = localStorage.getItem(
    `CognitoIdentityServiceProvider.${poolId}.${userId}.idToken`
  );
  const RefreshToken = localStorage.getItem(
    `CognitoIdentityServiceProvider.${poolId}.${userId}.refreshToken`
  );
  return { AccessToken, IdToken, RefreshToken };
};
export function checkUserAuthentication() {
  return getToken().AccessToken !== null;
}