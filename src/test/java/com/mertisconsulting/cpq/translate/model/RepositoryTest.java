package com.mertisconsulting.cpq.translate.model;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
/**
 * Created by: michael
 * Date: 2/1/18
 **/
public class RepositoryTest {
    private Repository repo;

    @Before
    public void setUp() throws Exception {
        this.repo = new Repository("local");
    }

    @Test
    public void testRepositoryHasLocal() {
        assertNotNull("Repository should have a local location", repo.getLocal());
    }

    @Test
    public void testRepositoryHasRemote() {
        assertNotNull("Repository should have a remote location", repo.getRemote());
    }
}
