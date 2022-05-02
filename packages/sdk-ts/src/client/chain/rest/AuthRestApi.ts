import BaseRestConsumer from '../../BaseRestConsumer'
import { AccountResponse, RestApiResponse } from './types'

export class AuthRestApi extends BaseRestConsumer {
  /**
   * Looks up the account information for the Injective address.
   *
   * @param address address of account to look up
   */
  public async account(address: string): Promise<AccountResponse> {
    const response = (await this.client.get(
      `cosmos/auth/v1beta1/accounts/${address}`,
    )) as RestApiResponse<AccountResponse>

    return response.data
  }
}