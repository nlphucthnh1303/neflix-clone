export type StatusNotification = "OK" | "ERROR" | "INIT";

export class State<T,V>{
    value?: T;
    error?: V;
    status: StatusNotification;

    public constructor(status: StatusNotification, value?: T, error?: V) {
        this.status = status;
        this.value = value;
        this.error = error;
    }

    static Builder<T,V>(){
        return new StateBuilder<T,V>();
    }
}

class StateBuilder<T,V>{
    private status: StatusNotification = "INIT";
    private value?: T;
    private error?: V;

    public forError(error: V): StateBuilder<T,V>{
        this.status = "ERROR";
        this.error = error;
        return this;
    }

    public forSuccess(value: T): StateBuilder<T,V>{
        this.status = "OK";
        this.value = value;
        return this;
    }

    public forInit(): StateBuilder<T,V>{
        this.status = "INIT";
        return this;
    }


    build(): State<T,V>{
        return new State<T,V>(this.status, this.value, this.error);
    }   
}