// Blazor WebAssembly application configuration and entry point
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using NewAndRetroPong;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

// Configure application root component
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

// Configure HTTP client for the application
builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

// Build and run the application
await builder.Build().RunAsync();
