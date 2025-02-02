import type { Prisma } from '@prisma/client';
import { ObjectType, InputType, Field, ArgsType, ID } from 'type-graphql';

import { PaginatedResponse } from '@/graphql/paginatedResponse';
import { QueryArgsBase } from '@/graphql/queryArgs';
import { Sale } from '@/entity/sale/sale.entity';

// Sale Query Args
@ArgsType()
export class SaleQueryArgs extends QueryArgsBase<Prisma.SaleWhereInput> {}

// Sale list response with pagination ( total )
@ObjectType()
export class SalesResponse extends PaginatedResponse {
  @Field(() => [Sale], { nullable: 'itemsAndList' })
  sales?: Sale[];
}

// Create Sale Input and Response
@InputType()
export class CreateSaleInput {
  @Field(() => ID)
  memberId: string;

  @Field()
  username: string;

  @Field()
  invoiceNo: number;

  @Field()
  productName: string;

  @Field()
  paymentMethod: string;

  @Field()
  amount: number;

  @Field()
  hashPower: number;

  @Field()
  issuedAt: Date;
}
