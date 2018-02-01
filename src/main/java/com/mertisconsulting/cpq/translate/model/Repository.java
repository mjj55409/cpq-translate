package com.mertisconsulting.cpq.translate.model;

/**
 * Created by: michael
 * Date: 2/1/18
 **/
public class Repository {
    private String local;
    private String remote;

    public Repository(String local) {
        this.local = local;
        this.remote = "";
    }

    public Repository(String local, String remote) {
        this.local = local;
        this.remote = remote;
    }

    public Object getLocal() {
        return local;
    }

    public String getRemote() {
        return remote;
    }
}
