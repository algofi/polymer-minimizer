package server;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.ResourceHandler;

public class SiteServerMain {

	public static void main(String[] args) throws Exception {
		
		// expected
		int port = 9000;
		String webRoot = "src/test/resources/minifier-all/source";
		startStaticServer(port, webRoot);

		// actual
		port = 9001;
		webRoot = "src/test/resources/minifier-all/build";
		startStaticServer(port, webRoot);
		
		// example
		port = 9002;
		webRoot = "src/test/resources/my-app/target/polymer-minifier-integration-test";
		startStaticServer(port, webRoot);
		
		// example
		port = 9003;
		webRoot = "src/test/resources/my-app";
		startStaticServer(port, webRoot);

		// example
		port = 9004;
		webRoot = "src/test/resources/my-app/target/polymer-minifier-integration-test-mini";
		startStaticServer(port, webRoot);
		
	}

	private static void startStaticServer(int port, String webRoot) throws Exception {
		final ResourceHandler handler = new ResourceHandler();
		handler.setResourceBase(webRoot);

		final Server server = new Server(port);
		server.setHandler( handler );
		server.start();
	}

}
