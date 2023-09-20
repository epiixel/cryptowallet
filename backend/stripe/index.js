import Stripe from 'stripe';
import dotenv from 'dotenv';
import { app, PORT_HTTPS, PORT_HTTP, options } from '../express/index.js';
import { query } from '../mysql/index.js';

dotenv.config();

const stripe = new Stripe("");
// console.log(stripe)
var stripe_finance = "fa_1NSmoIQRMs7IuQ66jPRaBntX";
var stripe_account = "acct_1NSnrq4IVZAWX74q";


export async function CreateStripeProduct(id, name){
    const product = await stripe.products.create({
      id: id,
      name: name
    });
    console.log(product);
    return product;
  }
  
  export const ListStripeProducts = async (limit) => {
    const products = await stripe.products.list({
      limit: limit,
    });
    console.log(products);
    return products;
  }

  export async function GetStripeProduct(id){
    const product = await stripe.products.retrieve(id);
    console.log(product);
    return product;
  }

  export async function UpdateStripeProducts(id, metadata){
    const product = await stripe.products.update(
      id,
      {metadata: metadata}
    );
    console.log(product);
    return product;
  }
  
  export async function CreateStripePrice(value, currency, intervalCount, product){
    const price = await stripe.prices.create({
      unit_amount: value,
      currency: currency,
      recurring: {
        interval: 'month',
        interval_count: intervalCount
      },
      product: product,
    });
    console.log(price);
    return price;
  }
  
  export async function RetrievePrice(id){
    const price = await stripe.prices.retrieve(
      id
    );
    return price;
  }
  
  export async function UpdatePrice(id){
    const price = await stripe.prices.update(
      id,
      {metadata: {order_id: '6735'}}
    );
    return price;
  }
  
  export async function ListPrices(n){
    const prices = await stripe.prices.list({
      limit: n,
    });
    return prices;
  }
  
  export async function CreateStripeSubscription(custumer, price, metadata){
    try{

      const subscription = await stripe.subscriptions.create({
        customer: custumer,
        items: [
          {
            price: price
          },
        ],
        metadata: metadata,
        payment_behavior: 'default_incomplete',
        payment_settings: { save_default_payment_method: 'on_subscription' },
        expand: ['latest_invoice.payment_intent'],
      });
      console.log(subscription);
      return subscription;
    }catch(err){
      console.log(err);
      return err;
    }
  }
  
  export async function GetStripeSubscription(id){
    const subscription = await stripe.subscriptions.retrieve(
      id
    );
    console.log(subscription);
    return subscription;
  }
  
  export async function UpdateStripeSubscription(id, cancel){
    const subscription = await stripe.subscriptions.update(
      id,
      {
        metadata: {
          cancel_at_period_end: cancel
        }
      }
    );
    console.log(subscription);
    return subscription;
  }
  
  export async function CancelStripeSubscription(id){
    const deleted = await stripe.subscriptions.del(
      id
    );
    console.log(deleted);
    return deleted;
  }
  
  export async function ListStripeSubscription(){
    const subscriptions = await stripe.subscriptions.list({
      limit: 10,
    });
    console.log(subscriptions)
    return subscriptions;
  }
 
  export async function ScheduleSubscription(customer_id, price_id, period){
    const schedule = await stripe.subscriptionSchedules.create({
      customer: customer_id,
      start_date: 'now',
      end_behavior: 'release',
      phases: [
        {
          items: [{ price: price_id, quantity: 1 }],
          iterations: period,
        },
      ],
    });
    return schedule;
  }
  
  
  export async function CreateStripeCustomer(name, phone, email, metadata){
    const customer = await stripe.customers.create({
      name: name,
      phone: phone,
      email: email,
      metadata: metadata
    });
    console.log(customer)
    return customer;
  }
  
  export async function GetStripeCustomer(id){
    const customer = await stripe.customers.retrieve(id);
    console.log(customer)
    return customer;
  }
  
  export async function DeleteStripeCustomer(id){
    const deleted = await stripe.customers.del(id);
    console.log(deleted)
    return deleted;
  }
  
  export async function ListStripeCustomer(limit){
    const customers = await stripe.customers.list({limit: limit});
    console.log(customers);
    return customers;
  }
  
  export async function UpdateStripeCustomer(name, phone, email, metadata){
    const customer = await stripe.customers.update(
      id,
      {
        name: name,
        phone: phone,
        email: email,
        metadata: metadata
      }
    );
    console.log(customer);
    return customer;
  }

  export async function CreateAccount(){
    const account = await stripe.accounts.create({
        type: 'express',
        country: 'US',
        email: 'email2@gmail.com',
        capabilities: {
          card_payments: {requested: true},
          transfers: {requested: true},
        },
      });
  }
// CreateAccount()

  export async function ListAccounts(){
    const accounts = await stripe.accounts.list({
        limit: 3,
      });
      console.log(accounts)
  }
// ListAccounts();

export async function GetAccount(id){
    const account = await stripe.accounts.retrieve(
        id
      );
      console.log(account)
}
  // GetAccount("acct_1NSilOQLNdzHPUgZ")

export async function UpdateAccount(id, value){
    const account = await stripe.accounts.update(
        id,
        value
      );
}

export async function CreateLoginLink(id){
    const loginLink = await stripe.accounts.createLoginLink(
        id
      );
      console.log(loginLink)
}
// CreateLoginLink("acct_1NSiUXQPud1HHewo")

  export async function UpdateAccountType(id){
    const account = await stripe.accounts.update(
        id,
        {
          capabilities: {
            treasury: {
              requested: true,
            },
            card_issuing: {
              requested: true,
            },
            us_bank_account_ach_payments: {
              requested: true,
            },
          },
        }
      );
      console.log(account)
  }
  // UpdateAccountType("acct_1NSilOQLNdzHPUgZ")

export async function SendTx(){
    const outboundPayment = await stripe.treasury.outboundPayments.create(
        {
          financial_account: stripe_finance,
          amount: 2000,
          currency: 'usd',
          statement_descriptor: 'payment_1',
          destination_payment_method_data: {
            type: 'us_bank_account',
            us_bank_account: {
              account_holder_type: 'individual',
              routing_number: '110000000',
              account_number: '000000000009',
            },
            billing_details: {
              email: 'jenny@example.com',
              phone: '7135551212',
              address: {
                city: 'Alvin',
                state: 'TX',
                postal_code: '77511',
                line1: '123 Main St.',
              },
              name: 'Jenny Rosen',
            },
          },
        },
        {
          stripeAccount: stripe_account,
        }
      );
        console.log(outboundPayment)
    }
// SendTx();
export async function CreateFinancialAccount(id){
  const financialAccount = await stripe.treasury.financialAccounts.create(
    {
      supported_currencies: ['usd'],
      features: {
        card_issuing: {
          requested: true,
        },
        deposit_insurance: {
          requested: true,
        },
        financial_addresses: {
          aba: {
            requested: true,
          },
        },
        inbound_transfers: {
          ach: {
            requested: true,
          },
        },
        intra_stripe_flows: {
          requested: true,
        },
        outbound_payments: {
          ach: {
            requested: true,
          },
          us_domestic_wire: {
            requested: true,
          },
        },
        outbound_transfers: {
          ach: {
            requested: true,
          },
          us_domestic_wire: {
            requested: true,
          },
        },
      },
    },
    {
      stripeAccount: stripe_account,
    }
  );
  console.log(financialAccount)

}
// CreateFinancialAccount(`acct_1NSnrq4IVZAWX74q`)

export async function ListFinancialAccounts(){
  const financialAccounts = await stripe.treasury.financialAccounts.list({
    limit: 10,
  });
  console.log(financialAccounts)
}
// ListFinancialAccounts()

// export async function DeleteFinancialAccount(id){
//   const del = await stripe.treasury.financialAccounts.del(id);
//   console.log(del)
// }
// DeleteFinancialAccount("fa_1NRyqbKtVb7LeutOOVGmvuet")

export async function GetFinancialAccount(id){
  const financialAccount = await stripe.treasury.financialAccounts.retrieve(
    `${id}`
  );
}
// GetFinancialAccount(`fa_1NSntB4IVZAWX74qs81mYbAM`)

export async function LinkAccount(id){
  const accountLink = await stripe.accountLinks.create({
    account: id,
    refresh_url: 'https://example.com/reauth',
    return_url: 'https://example.com/return',
    type: 'account_onboarding',
  });
  console.log(accountLink)
}
// LinkAccount("acct_1NSmU1QRMs7IuQ66")

export async function RetrieveFunctionsFinancial(id){
  const financialAccountFeatures = await stripe.treasury.financialAccounts.retrieveFeatures(
    'fa_1NSmoIQRMs7IuQ66jPRaBntX',
    {
      stripeAccount: id,
    }
  );
  console.log(financialAccountFeatures)
}
// RetrieveFunctionsFinancial("fa_1NSmoIQRMs7IuQ66jPRaBntX")

export async function CreatePaymentByCard(){
  
  const paymentMethod = await stripe.paymentMethods.create({
    type: 'card',
    card: {
      number: '4242424242424242',
      exp_month: 8,
      exp_year: 2024,
      cvc: '314',
    },
  });
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'usd',
    payment_method_types: ['card'],
    payment_method: paymentMethod.id
  });
  console.log(paymentIntent)
  return;

  const inboundTransfer = await stripe.treasury.inboundTransfers.create(
    {
      origin_payment_method: paymentMethod.id,
      financial_account: stripe_finance,
      amount: 20000,
      currency: 'usd',
      description: 'Funds for repair',
      statement_descriptor: 'Invoice 12',
    },
    {
      stripeAccount: stripe_account,
    }
  );

  console.log(inboundTransfer)
}
// CreatePaymentByCard()

export async function AddCredit(){
  const receivedCredit = await stripe.testHelpers.treasury.receivedCredits.create(
    {
      financial_account: stripe_finance,
      network: 'ach',
      amount: 50000,
      currency: 'usd',
    },
    {
      stripeAccount: stripe_account,
    }
  );
  console.log(receivedCredit)
}
// AddCredit()

export async function RetrieveBalance(){
  const balance = await stripe.balance.retrieve();
  console.log(balance)
  return balance;
}
// RetrieveBalance();