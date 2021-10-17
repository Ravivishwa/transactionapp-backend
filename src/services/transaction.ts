import { Service, Inject } from 'typedi';
import mongoose from 'mongoose';
import { IUser} from '../interfaces/IUser';
import { ITransaction, ITransactionDTO } from '../interfaces/ITransaction';

@Service()
export default class TrsansactionService {
  constructor(
    @Inject('transactionModel') private transactionModel: Models.TransactionModel,
  ) {
  }

	public async GetAllTransactions(user: IUser):Promise< ITransaction[] >{		
		return this.transactionModel.find({user:user._id});
	}

	public async CreateTransaction(newTransaction: ITransactionDTO, user: IUser ):Promise<{}>{
		return this.transactionModel.create({
			...newTransaction,
			user:user._id
		});
	}

	public async deleteTransaction(id: string ):Promise<{}>{
		return this.transactionModel.findByIdAndDelete(new mongoose.mongo.ObjectID(id));
	}

 
}
