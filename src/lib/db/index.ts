function openDB(name: string, version: number): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(name, version);
    request.onsuccess = (event) => {
      resolve((event.target as IDBOpenDBRequest).result);
    };
    request.onerror = (event: any) => {
      reject(event.target.error as Error);
    };
  });
}

export class DataBase {
  db: IDBDatabase | null = null;
  name: string;
  version: number;
  constructor(name: string, version: number) {
    this.name = name;
    this.version = version;
    console.log("new db!");

    openDB(this.name, this.version)
      .then((res) => {
        this.db = res;
      })
      .catch((err) => {
        console.error(err);
        this.db = null;
      });
  }
}
