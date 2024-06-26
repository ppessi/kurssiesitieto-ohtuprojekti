# Käyttäjäopas

Pikavalikko:

- [Tutkinnon valitseminen](#tutkinnon-valitseminen)
- [Kurssin etsiminen ja tämän esitietojen visualisointi](#kurssin-etsiminen-ja-tämän-esitietojen-visualisointi)
- [Kurssin kuvauksen lukeminen](#kurssin-kuvauksen-lukeminen)
- [Oman tutkinnon lisääminen](#oman-tutkinnon-lisääminen)

## Tutkinnon valitseminen

Paina ylävasemmalta "Tutkinto" ja valitse alasvetovalikosta haluamasi tutkintosi.

![Kurssihaku](https://github.com/Kurssiesitieto/kurssiesitieto-ohtuprojekti/blob/main/documentation/images/userguideimages/tutkinto-valinta.gif)

## Kurssin etsiminen ja tämän esitietojen visualisointi

Tutkintoon sisältyvät kurssit voidaan etsiä hakupalkin avulla. Kurssin voi hakea syöttämällä kenttään joko sen nimi tai koodi, jolloin sen voi valita. Kurssin esitiedot ilmenevät näytölle valinnan jälkeen.

![Kurssihaku](https://github.com/Kurssiesitieto/kurssiesitieto-ohtuprojekti/blob/main/documentation/images/userguideimages/kurssihaku.gif)

## Kurssin kuvauksen lukeminen

Kurssilaatikoita voidaan klikata, jolloin sivupaneeli aukeaa. Sivupaneelista voidaan tämän jälkeen painaa "Kurssin kuvaus" nappia, jolloin näytölle ilmenee kurssin kuvaus. Näkymästä voi poistua klikkaamalla jonnekkin muualle.

![Kurssihaku](https://github.com/Kurssiesitieto/kurssiesitieto-ohtuprojekti/blob/main/documentation/images/userguideimages/kurssikuvaus.gif)

## Oman tutkinnon lisääminen

Mikäli haluat kontribuoida projektiin, tarvitset github tilin tätä varten. Helsingin Yliopiston tutkintoja voi tarkastella [tämän linkin](https://eduviewer.it.helsinki.fi/) kautta.

### Vaihtoehto 1: Githubin webbisivun kautta

1. Luo uusi branchi [linkistä](https://github.com/Kurssiesitieto/kurssiesitieto-ohtuprojekti/branches)
![Branchinluonti](https://github.com/Kurssiesitieto/kurssiesitieto-ohtuprojekti/blob/main/documentation/images/userguideimages/branchinluonti.gif)
2. Valitse luomasi branchi
![Branchvalinta](https://github.com/Kurssiesitieto/kurssiesitieto-ohtuprojekti/blob/main/documentation/images/userguideimages/branchvalinta.gif)
4. Mene hakemistoon /kurssiesitieto-ohtuprojekti/blob/main/backend/dbStartup/added-degrees/
5. Luo uusi tutkinto ja kopioi tiedostoon [linkin](https://github.com/Kurssiesitieto/kurssiesitieto-ohtuprojekti/blob/main/backend/dbStartup/added-degrees/base-for-managing-degrees.json) sisältö
![Tutkinnonluonti](https://github.com/Kurssiesitieto/kurssiesitieto-ohtuprojekti/blob/main/documentation/images/userguideimages/tutkinnonluonti.gif)
6. Muokkaa tutkintoa sisällön avulla
7. Jätä kyseinen tiedosto arkistointia varten sikseen, ja kopioi sen sisältö tiedostoon [degreeToDb.json](https://github.com/Kurssiesitieto/kurssiesitieto-ohtuprojekti/blob/main/backend/dbStartup/degreeToDb.json), josta järjestelmä osaa automaattisesti lisätä sen
8. Luo pull requesti. Tämän jälkeen projektin ylläpitäjät voivat päättää, hyväksyvätkö tämän tutkinnon osaksi projektia.
![Pullrequest](https://github.com/Kurssiesitieto/kurssiesitieto-ohtuprojekti/blob/main/documentation/images/userguideimages/pullrequest.gif)
 
### Vaihtoehto 2: Oman tietokoneen kautta

1. Pullaa projekti omalle koneellesi
2. Luo uusi branch itsellesi
3. Siirry projektissa backend/dbStartup/added-degrees hakemistoon
4. Kopioi base-for-managing-degrees.json tiedosto (https://github.com/Kurssiesitieto/kurssiesitieto-ohtuprojekti/blob/main/backend/dbStartup/added-degrees/base-for-managing-degrees.json), ja nimeä se tutkintokoodin mukaisesti (esim. TKT20-23, formaatissa tutkinnon lyhenne, sekä tämän vuodet).
5. Avaa tiedosto
6. Käytä tiedoston pohjaa mallina, johonka voit muokata haluamasi tiedot.
7. Jätä kyseinen tiedosto arkistointia varten sikseen, ja kopioi sen sisältö tiedostoon [degreeToDb.json](https://github.com/Kurssiesitieto/kurssiesitieto-ohtuprojekti/blob/main/backend/dbStartup/degreeToDb.json), josta järjestelmä osaa automaattisesti lisätä sen
8. Pushaa tiedostot
9. Luo pull requesti. Tämän jälkeen projektin ylläpitäjät voivat päättää, hyväksyvätkö tämän tutkinnon osaksi projektia.

