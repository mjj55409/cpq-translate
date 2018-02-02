package com.mertisconsulting.cpq.translate.model;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertNotNull;

/**
 * Created by: michael
 * Date: 2/1/18
 **/
public class CharacteristicTest {
    private Characteristic cstic;

    @Before
    public void setUp() throws Exception {
        this.cstic = new Characteristic("name");
    }

    @Test
    public void testCsticHasTechnicalName() {
        assertNotNull("Characteristic should have a technical name", cstic.getTechnicalName());
    }

    @Test
    public void testCsticHasLanguageDependentNames() {
        assertNotNull("Repository should have a language dependent names", cstic.getLanguageDependentNames());
    }
}
