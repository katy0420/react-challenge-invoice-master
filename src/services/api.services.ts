import { Customer } from "../interfaces/customer-interface";

export class AppService {
  public async getCustomer(): Promise<Customer[] | undefined> {
    try{
      const response = await fetch(
        "https://rawgit.com/wvchallenges/se-exp-challenge-invoice/master/settings.json"
      ).then((res) => res.json())
      .then((result) => result.customers as Customer[]);
      return response;
    } catch(err) {
      console.log('err', err);
    }
  }
}
