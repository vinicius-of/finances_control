import mongoose from 'mongoose';

// type AvailableModels = 'Ventures';

// interface MongoOptions {
//   page: number;
//   limit: number;
//   sort: () => 1 | 0 | -1;
//   fields?: Record<string, 0 | 1>;
// }

// interface FindArgs<T> {
//   find: FilterQuery<T>;
//   options: MongoOptions;
// }

export default class MongoManager {
  private connection: mongoose.Connection | undefined;
  // private models = {
  //   Ventures: VentureModel,
  // };
  // private model?: typeof mongoose.Model;

  // constructor(model?: AvailableModels) {
  //   const selectedModel = !!Object.keys(this.models).find(
  //     (modelName) => model === modelName,
  //   );

  //   if (selectedModel && model) {
  //     this.model = this.models[model];
  //   } else if (!selectedModel && model) {
  //     throw new MongooseModelNotExistsError(model);
  //   }
  // }

  init(url: string): void {
    this.connection = mongoose.connection;

    this.connection.on('connected', () => {
      console.log('Mongoose connection established with success');
    });

    this.connection.on('connecting', () => {
      console.log('Mongoose establishing connection...');
    });

    this.connection.on('error', (err) => {
      console.error('MongoManager Error Connection: ', err);
    });

    this.connection.on('disconnected ', (err) => {
      console.error('MongoManager Error Connection: ', err);
    });

    mongoose.connect(url, {
      auth: {
        username: '',
        password: '',
      },
      dbName: 'financial_dashboard',
      appName: 'financial_dashboard_backend',
      serverSelectionTimeoutMS: 5000,
    });
  }

  // async create<T = unknown>(item: unknown) {
  //   const newDoc = await this.model!.create<T>(item);
  //   return newDoc;
  // }

  // async find<T = unknown>({
  //   find,
  //   options: { fields, ...options },
  // }: FindArgs<T>): Promise<T[]> {
  //   return await this.model!.find(
  //     {
  //       ...find,
  //     },
  //     fields,
  //     options,
  //   ).exec();
  // }

  // async findOne<T = unknown>({
  //   find,
  //   options: { fields, ...options },
  // }: FindArgs<T>): Promise<T> {
  //   return await this.model!.findOne(
  //     {
  //       ...find,
  //     },
  //     fields,
  //     options,
  //   ).exec();
  // }

  // async updateOne<T = unknown>(
  //   id: mongoose.Types.ObjectId,
  //   update: mongoose.UpdateQuery<T>,
  // ): Promise<boolean> {
  //   const updated = await this.model!.findOneAndUpdate(id, update, {
  //     upsert: false,
  //   });

  //   if (updated.acknowledged) {
  //     return true;
  //   }

  //   throw new MongooseUpdateError(updated);
  // }

  // async delete<T = unknown>(id: mongoose.Types.ObjectId) {
  //   const deleted = await this.model!.findOneAndDelete<T>(id);

  //   if (deleted) {
  //     return true;
  //   }

  //   throw new MongooseDeleteError(id.toString());
  // }
}
